-- TYPE YOUR SQL QUERY BELOW

-- PART 1: Create a SQL query that maps out the daily average users before and after the feature change
-- Feature release date: 2018-06-02

-- Query 1A: Daily active users with period indicator
SELECT 
    DATE(login_timestamp, 'unixepoch') as login_date,
    COUNT(DISTINCT user_id) as daily_active_users,
    CASE 
        WHEN DATE(login_timestamp, 'unixepoch') < '2018-06-02' THEN 'Before Feature'
        ELSE 'After Feature'
    END as period
FROM login_history
GROUP BY login_date
ORDER BY login_date;

-- Query 1B: Average daily users by period (summary statistics)
WITH daily_stats AS (
    SELECT 
        DATE(login_timestamp, 'unixepoch') as login_date,
        COUNT(DISTINCT user_id) as daily_users
    FROM login_history
    GROUP BY login_date
)
SELECT 
    CASE 
        WHEN login_date < '2018-06-02' THEN 'Before Feature'
        ELSE 'After Feature'
    END as period,
    ROUND(AVG(daily_users), 2) as average_daily_active_users,
    MIN(daily_users) as min_daily_users,
    MAX(daily_users) as max_daily_users,
    COUNT(*) as total_days
FROM daily_stats
GROUP BY period;


-- PART 2: Create a SQL query that indicates the number of status changes by card

-- Query 2A: Status changes per card
SELECT 
    cardID,
    c.name as card_name,
    COUNT(*) as total_status_changes,
    COUNT(DISTINCT newStatus) as unique_statuses_used,
    MIN(datetime(timestamp, 'unixepoch')) as first_change,
    MAX(datetime(timestamp, 'unixepoch')) as last_change
FROM card_change_history cch
LEFT JOIN card c ON cch.cardID = c.id
WHERE oldStatus IS NOT NULL AND oldStatus != newStatus
GROUP BY cardID
ORDER BY total_status_changes DESC;

-- Query 2B: Status transition patterns
SELECT 
    oldStatus || ' -> ' || newStatus as status_transition,
    COUNT(*) as transition_count,
    ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM card_change_history WHERE oldStatus IS NOT NULL AND oldStatus != newStatus), 2) as percentage
FROM card_change_history
WHERE oldStatus IS NOT NULL AND oldStatus != newStatus
GROUP BY status_transition
ORDER BY transition_count DESC;

-- Query 2C: Daily status change activity
SELECT 
    DATE(timestamp, 'unixepoch') as change_date,
    COUNT(*) as total_changes,
    COUNT(DISTINCT cardID) as unique_cards_changed
FROM card_change_history
WHERE oldStatus IS NOT NULL AND oldStatus != newStatus
GROUP BY change_date
ORDER BY change_date;
