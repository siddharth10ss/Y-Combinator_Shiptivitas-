# Three Actionable Ideas to Increase Daily Active Users

**Prepared for:** Y Combinator Shiptivitas  
**Prepared by:** Siddharth (siddharth10ss)  
**Date:** November 9, 2025  
**Context:** Kanban Board feature increased DAU by 224% (3.63 → 11.79)

---

## Executive Summary

The Kanban Board feature released on June 2, 2018 demonstrated massive user engagement, increasing daily active users by **224%**. The following three features build on this success to drive further growth in our core metric: daily active users.

**Target:** Increase DAU from 11.79 to 15+ users (27% increase)

---

## Idea 1: Card Activity Notifications 🔔

### Hypothesis
**If we add real-time notifications when cards are moved or updated, users will check the app more frequently throughout the day, increasing daily active users by 15-20%.**

### Expected Impact

**Primary Metric:**
- Daily Active Users: 11.79 → 14-15 (+15-20%)

**Secondary Metrics:**
- Session frequency: +30%
- Average session duration: +2-3 minutes
- User retention (30-day): +10%

**Timeline to Impact:** 2-3 weeks after launch

### What the Feature Is

A comprehensive notification system that alerts users about card activity in real-time:

**Notification Triggers:**
1. **Card Movement** - When a card you're watching moves to a new status
2. **Priority Changes** - When high-priority cards are updated
3. **Assignments** - When cards are assigned to you
4. **Deadlines** - When cards are approaching due dates
5. **Comments** - When someone comments on your cards (future feature)

**Delivery Channels:**
- Push notifications (mobile app)
- Browser notifications (web app)
- In-app notification center
- Optional email digest

**User Controls:**
- Granular notification preferences
- Quiet hours setting
- Per-card notification settings
- Bulk notification management

### Why This Will Work

**Data Evidence:**
- Current data shows users actively move cards (avg 2-3 changes per active card)
- Card #187 has 5 status changes, indicating high engagement
- Users are already checking the app to see updates

**Psychological Principle:**
- Creates a **feedback loop**: notification → check app → see update → make change → trigger notification for others
- Taps into **FOMO** (fear of missing out) on team activity
- Provides **instant gratification** when cards progress

**Competitive Analysis:**
- Trello, Asana, and Monday.com all have robust notification systems
- Industry standard for project management tools
- Users expect this functionality

### Implementation Details

**Phase 1 (MVP - 2 weeks):**
- In-app notification center
- Basic push notifications for card movements
- Simple on/off toggle

**Phase 2 (Full Feature - 4 weeks):**
- Granular notification preferences
- Browser notifications
- Quiet hours
- Notification grouping (e.g., "3 cards moved to Complete")

**Phase 3 (Optimization - 6 weeks):**
- Smart notifications (ML-based relevance)
- Notification analytics
- A/B testing different notification copy

**Technical Requirements:**
- WebSocket connection for real-time updates
- Push notification service (Firebase Cloud Messaging)
- Notification preference database schema
- Background job for email digests

### Success Metrics

**Week 1-2:**
- 50% of users enable notifications
- 20% increase in session frequency

**Week 3-4:**
- 60% of users enable notifications
- 15% increase in DAU
- 25% increase in session frequency

**Month 2-3:**
- 70% of users enable notifications
- 20% increase in DAU
- Improved retention metrics

### Wireframe

```
┌─────────────────────────────────────────────┐
│  Shiptivitas                    🔔 (3)      │
├─────────────────────────────────────────────┤
│                                             │
│  Notifications                              │
│  ─────────────────────────────────────────  │
│                                             │
│  ● Card "Ship to NYC" moved to Complete    │
│    by John Smith                            │
│    2 minutes ago                    [View]  │
│                                             │
│  ● High priority card assigned to you:      │
│    "Urgent Delivery - LA"                   │
│    15 minutes ago                   [View]  │
│                                             │
│  ● Card "Boston Shipment" updated           │
│    by Sarah Johnson                         │
│    1 hour ago                       [View]  │
│                                             │
│  [Mark all as read]  [Notification Settings]│
└─────────────────────────────────────────────┘

Notification Settings:
┌─────────────────────────────────────────────┐
│  Notification Preferences                   │
│  ─────────────────────────────────────────  │
│  ☑ Card movements                           │
│  ☑ Card assignments                         │
│  ☑ Priority changes                         │
│  ☐ All card updates                         │
│                                             │
│  Quiet Hours: 10:00 PM - 8:00 AM           │
│  [Edit]                                     │
│                                             │
│  Delivery:                                  │
│  ☑ Push notifications                       │
│  ☑ In-app notifications                     │
│  ☐ Email digest (daily)                    │
└─────────────────────────────────────────────┘
```

---

## Idea 2: Card Templates & Quick Actions ⚡

### Hypothesis
**If we reduce the friction of creating and moving cards with templates and quick actions, users will manage more cards and visit the app more frequently, increasing daily active users by 10-15%.**

### Expected Impact

**Primary Metric:**
- Daily Active Users: 11.79 → 13-14 (+10-15%)

**Secondary Metrics:**
- Cards created per user: +40%
- Status changes per day: +25%
- Time to complete workflow: -30%
- Power user adoption: +50%

**Timeline to Impact:** 3-4 weeks after launch

### What the Feature Is

A suite of efficiency tools that make card management faster and easier:

**1. Card Templates**
Pre-configured card types with default fields:
- 📦 Shipping Request (priority, destination, deadline)
- 🚨 Customer Issue (urgency, customer name, issue type)
- ⚙️ Internal Task (assignee, department, complexity)
- 📋 Custom Template (user-defined)

**2. Quick Actions**
- **Keyboard Shortcuts:**
  - `N` - New card
  - `1` - Move to Backlog
  - `2` - Move to In Progress
  - `3` - Move to Complete
  - `E` - Edit card
  - `D` - Delete card
  - `?` - Show shortcuts overlay

- **Bulk Operations:**
  - Multi-select with Shift+Click or Ctrl+Click
  - Bulk move cards
  - Bulk priority change
  - Bulk delete

- **Context Menu:**
  - Right-click on card for quick actions
  - Duplicate card
  - Move to... (quick status picker)
  - Change priority
  - Archive

- **Drag & Drop Enhancements:**
  - Multi-card drag
  - Visual feedback during drag
  - Snap-to-position guides

### Why This Will Work

**Data Evidence:**
- Users are actively managing cards (200 cards with status changes)
- Most active cards have 3-5 status changes
- Current friction: each action requires multiple clicks

**User Pain Points:**
- Creating similar cards repeatedly (shipping requests)
- Moving multiple cards one at a time
- Switching between mouse and keyboard

**Efficiency Gains:**
- Templates: 5 clicks → 1 click (80% reduction)
- Keyboard shortcuts: 3 clicks → 1 keystroke (67% reduction)
- Bulk operations: N clicks → 1 operation (N-1 reduction)

### Implementation Details

**Phase 1 (Templates - 2 weeks):**
- Template library UI
- 3 default templates
- Template creation interface
- Template selection on card creation

**Phase 2 (Keyboard Shortcuts - 2 weeks):**
- Keyboard event handlers
- Shortcut overlay (press `?`)
- Visual feedback for shortcuts
- Customizable shortcuts (settings)

**Phase 3 (Bulk Operations - 3 weeks):**
- Multi-select functionality
- Bulk action toolbar
- Confirmation dialogs
- Undo functionality

**Technical Requirements:**
- Template storage (database schema)
- Keyboard event management
- Multi-select state management
- Bulk operation API endpoints

### Success Metrics

**Week 1-2:**
- 30% of users create a template
- 20% of users use keyboard shortcuts

**Week 3-4:**
- 50% of new cards use templates
- 40% of users use keyboard shortcuts
- 10% increase in cards created per user

**Month 2-3:**
- 70% of new cards use templates
- 60% of users use keyboard shortcuts
- 15% increase in DAU
- 40% increase in cards created per user

### Wireframe

```
┌─────────────────────────────────────────────┐
│  [+ New Card ▼]  [Templates ▼]  [? Shortcuts]│
│                                             │
│  Templates:                                 │
│  ┌─────────────────────────────────────┐   │
│  │ 📦 Shipping Request                 │   │
│  │ 🚨 Customer Issue                   │   │
│  │ ⚙️  Internal Task                   │   │
│  │ ─────────────────────────────────   │   │
│  │ 📋 Create Custom Template...        │   │
│  │ ⚙️  Manage Templates...             │   │
│  └─────────────────────────────────────┘   │
└─────────────────────────────────────────────┘

Keyboard Shortcuts Overlay (Press ?):
┌─────────────────────────────────────────────┐
│  Keyboard Shortcuts                         │
│  ─────────────────────────────────────────  │
│  Navigation:                                │
│    ↑↓ - Move between cards                 │
│    ←→ - Move between swimlanes             │
│    Esc - Close dialog                       │
│                                             │
│  Actions:                                   │
│    N - New card                             │
│    E - Edit card                            │
│    D - Delete card                          │
│    1/2/3 - Move to Backlog/Progress/Complete│
│    Shift+Click - Multi-select               │
│                                             │
│  [Customize Shortcuts]          [Close]     │
└─────────────────────────────────────────────┘

Multi-Select Mode:
┌─────────────────────────────────────────────┐
│  3 cards selected                           │
│  [Move to ▼] [Change Priority ▼] [Delete]  │
└─────────────────────────────────────────────┘
```

---

## Idea 3: Daily Digest & Analytics Dashboard 📊

### Hypothesis
**If we provide users with a daily summary of their card activity and team progress, they'll develop a habit of checking the app first thing each morning, increasing daily active users by 20-25% and improving retention.**

### Expected Impact

**Primary Metric:**
- Daily Active Users: 11.79 → 15-16 (+20-25%)

**Secondary Metrics:**
- Morning sessions (8-10am): +50%
- Weekly active users: +15%
- User retention (30-day): +20%
- Average session duration: +5 minutes

**Timeline to Impact:** 4-6 weeks after launch

### What the Feature Is

A comprehensive analytics and reporting system that provides insights into work progress:

**1. Daily Digest Email**
Sent at 8:00 AM in user's timezone:
- **Yesterday's Accomplishments:** Cards completed
- **Today's Focus:** Cards in progress
- **Needs Attention:** High-priority items
- **Team Activity:** Summary of team progress
- **Quick Actions:** Links to view/update cards

**2. Personal Analytics Dashboard**
New "Analytics" tab showing:
- **Productivity Metrics:**
  - Cards completed this week/month
  - Average time in each status
  - Completion rate trends
  - Busiest days/times

- **Visual Charts:**
  - Cards completed over time (line chart)
  - Time in status distribution (pie chart)
  - Productivity heatmap (calendar view)
  - Status flow diagram

- **Insights:**
  - "You completed 15% more cards this week!"
  - "Your average card takes 2.3 days"
  - "Most productive day: Tuesday"

**3. Team Dashboard**
For managers and team leads:
- **Team Velocity:** Cards completed per week
- **Bottleneck Identification:** Cards stuck in status
- **Workload Distribution:** Cards per team member
- **Trend Analysis:** Week-over-week comparisons
- **Export Reports:** PDF/CSV export

### Why This Will Work

**Data Evidence:**
- 224% increase in DAU after Kanban Board shows users value visibility
- Users are actively managing work (avg 2-3 changes per card)
- Current gap: no way to see progress over time

**Psychological Principles:**
- **Habit Formation:** Daily email creates morning routine
- **Progress Tracking:** Seeing accomplishments is motivating
- **Gamification:** Metrics create desire to improve
- **Social Proof:** Team metrics create healthy competition

**Behavioral Science:**
- **Zeigarnik Effect:** Incomplete tasks create tension → users return to complete them
- **Endowed Progress Effect:** Showing progress motivates completion
- **Streaks:** Daily check-ins create commitment

### Implementation Details

**Phase 1 (Personal Analytics - 3 weeks):**
- Analytics data collection
- Personal dashboard UI
- Basic charts (completed cards, time in status)
- Export functionality

**Phase 2 (Daily Digest - 2 weeks):**
- Email template design
- Automated email system
- Personalization engine
- Timezone handling
- Unsubscribe management

**Phase 3 (Team Dashboard - 3 weeks):**
- Team-level aggregation
- Manager permissions
- Advanced charts
- Comparative analytics
- Report scheduling

**Technical Requirements:**
- Analytics database schema
- Chart library (Chart.js or D3.js)
- Email service (SendGrid or AWS SES)
- Background jobs for email generation
- PDF generation library
- Caching for performance

### Success Metrics

**Week 1-2:**
- 40% email open rate
- 20% click-through rate
- 30% of users visit analytics dashboard

**Week 3-4:**
- 50% email open rate
- 25% click-through rate
- 50% of users visit analytics dashboard
- 10% increase in morning sessions

**Month 2-3:**
- 60% email open rate
- 30% click-through rate
- 70% of users visit analytics dashboard
- 25% increase in DAU
- 20% improvement in retention

### Wireframe

```
Daily Digest Email:
┌─────────────────────────────────────────────┐
│  Good morning, Siddharth! 🌅                │
│                                             │
│  Your Shiptivitas Daily Digest              │
│  ─────────────────────────────────────────  │
│                                             │
│  ✅ Yesterday's Wins (3 cards completed)    │
│     • Ship to NYC                           │
│     • Customer Issue #42                    │
│     • Internal Review                       │
│                                             │
│  🎯 Today's Focus (5 cards in progress)     │
│     • Urgent Delivery - LA                  │
│     • Boston Shipment                       │
│     • [View all →]                          │
│                                             │
│  ⚠️  Needs Attention (2 high-priority)      │
│     • Critical: Chicago Rush Order          │
│     • [Take action →]                       │
│                                             │
│  👥 Team Activity                           │
│     Your team completed 12 cards yesterday  │
│     [View team dashboard →]                 │
│                                             │
│  [Open Shiptivitas]                         │
└─────────────────────────────────────────────┘

Analytics Dashboard:
┌─────────────────────────────────────────────┐
│  📊 Your Analytics                          │
│  ─────────────────────────────────────────  │
│                                             │
│  This Week:                                 │
│  ✓ 12 cards completed  ↑ 15% vs last week  │
│  → 8 cards in progress                      │
│  ⏱  Avg time: 2.3 days per card             │
│                                             │
│  [Chart: Cards Completed Over Time]         │
│   ┌─────────────────────────────────────┐  │
│   │     ▁▂▃▅▇█▇▅▃▂▁                     │  │
│   │                                     │  │
│   └─────────────────────────────────────┘  │
│                                             │
│  [Chart: Time in Each Status]               │
│   Backlog: 0.5 days ████                    │
│   In Progress: 1.5 days ████████████        │
│   Complete: 0.3 days ██                     │
│                                             │
│  💡 Insights:                               │
│  • You're 15% more productive this week!    │
│  • Tuesday is your most productive day      │
│  • Cards spend most time in "In Progress"   │
│                                             │
│  [Export Report] [Share] [View Team Stats]  │
└─────────────────────────────────────────────┘

Team Dashboard:
┌─────────────────────────────────────────────┐
│  👥 Team Analytics                          │
│  ─────────────────────────────────────────  │
│                                             │
│  Team Velocity: 45 cards/week  ↑ 12%       │
│                                             │
│  [Chart: Team Completion Trend]             │
│   Week 1: ████████ 38 cards                │
│   Week 2: ██████████ 42 cards              │
│   Week 3: ███████████ 45 cards             │
│                                             │
│  Workload Distribution:                     │
│   John: 12 cards ████████████               │
│   Sarah: 10 cards ██████████                │
│   Mike: 8 cards ████████                    │
│                                             │
│  ⚠️  Bottlenecks:                           │
│   • 5 cards stuck in "In Progress" >5 days  │
│   • [View details →]                        │
│                                             │
│  [Export Team Report] [Schedule Report]     │
└─────────────────────────────────────────────┘
```

---

## Implementation Priority & Roadmap

### Recommended Order

**1. Analytics Dashboard (Weeks 1-6)**
- Highest ROI
- Leverages existing data
- No external dependencies
- Provides foundation for other features

**2. Notifications (Weeks 7-12)**
- Creates engagement loop
- Builds on analytics insights
- Drives users back to app

**3. Quick Actions (Weeks 13-18)**
- Optimizes for power users
- Reduces friction
- Complements other features

### Rationale

Start with analytics to:
1. Understand user behavior better
2. Provide immediate value
3. Create data foundation

Then add notifications to:
1. Drive engagement
2. Create habit loops
3. Increase session frequency

Finally optimize with quick actions to:
1. Retain power users
2. Increase efficiency
3. Handle increased usage

---

## Success Measurement Plan

### A/B Testing Strategy

**For Each Feature:**
- 50% of users get new feature
- 50% remain as control group
- Monitor for 30 days
- Compare metrics between groups

**Statistical Significance:**
- Minimum sample size: 1000 users per group
- Confidence level: 95%
- Power: 80%

### Key Performance Indicators

**Primary KPI:**
- Daily Active Users (target: 15+)

**Secondary KPIs:**
- Session frequency per user
- Average session duration
- Cards created per user per day
- Status changes per day
- 7-day retention rate
- 30-day retention rate

### Monitoring Dashboard

Real-time dashboard tracking:
- DAU trend (daily)
- Feature adoption rates
- User feedback scores
- Technical performance metrics
- A/B test results

### Decision Criteria

**Roll out to 100% if:**
- DAU increases by target amount
- No negative impact on other metrics
- User feedback is positive (>4.0/5.0)
- Technical performance is stable

**Iterate if:**
- Partial success (some metrics improve)
- User feedback suggests improvements
- Technical issues are minor

**Rollback if:**
- DAU decreases
- Negative user feedback (<3.0/5.0)
- Critical technical issues

---

## Conclusion

The Kanban Board feature's 224% increase in daily active users proves that users want visual, interactive tools for managing their work. These three features build on that success:

1. **Notifications** - Bring users back more frequently
2. **Quick Actions** - Make power users more efficient  
3. **Analytics** - Create habit loops and provide value

Each feature is:
- ✅ Data-driven (based on actual usage patterns)
- ✅ User-focused (solves real pain points)
- ✅ Measurable (clear success metrics)
- ✅ Achievable (realistic implementation timeline)

**Expected Combined Impact:**
- Daily Active Users: 11.79 → 17-18 (+45-50%)
- User Retention: +25-30%
- User Satisfaction: +20%

By implementing these features in the recommended order, we can systematically increase engagement while maintaining product quality and user satisfaction.

---

**Next Steps:**
1. Review and approve feature specifications
2. Prioritize in product roadmap
3. Assign engineering resources
4. Begin Phase 1 implementation
5. Set up A/B testing infrastructure
6. Launch and monitor metrics

---

**Prepared by:** Siddharth (siddharth10ss)  
**Contact:** siddharthss2006@gmail.com  
**Date:** November 9, 2025  
**Version:** 1.0
