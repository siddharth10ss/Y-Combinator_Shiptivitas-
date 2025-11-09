# Shiptivitas Kanban Board - Analytics & Feature Ideas

## Executive Summary

The Kanban Board feature released on **June 2, 2018** had a **massive positive impact** on daily active users:

- **Before Feature**: 3.63 average daily active users
- **After Feature**: 11.79 average daily active users
- **Impact**: **+224% increase** in daily active users

## Data Analysis

### 1. Daily Active Users Analysis

**Key Findings:**
- **Before Feature (Feb 3 - Jun 1, 2018)**: 
  - Average: 3.63 daily active users
  - Range: 1-10 users
  - Total days: 110

- **After Feature (Jun 2, 2018 - Feb 1, 2019)**:
  - Average: 11.79 daily active users
  - Range: 5-23 users
  - Total days: 245

**Insight**: The Kanban Board feature more than tripled daily engagement, with the minimum daily users after launch (5) exceeding the average before launch (3.63).

### 2. Card Status Changes Analysis

**Key Findings:**
- Most active cards have 3-5 status changes
- Card #187 has the most changes (5 transitions)
- Multiple cards show repeated engagement (2-4 changes)

**Status Transition Patterns:**
The most common transitions indicate users are:
1. Moving cards through the workflow (backlog → in-progress → complete)
2. Reorganizing priorities within swimlanes
3. Actively managing their work items

**Insight**: Users are not just viewing the board - they're actively manipulating cards, indicating high feature adoption and utility.

---

## Three Actionable Feature Ideas

### Idea 1: Card Activity Notifications

**Hypothesis:**
If we add real-time notifications when cards are moved or updated, users will check the app more frequently throughout the day, increasing daily active users by 15-20%.

**Expected Impact:**
- **Primary Metric**: Daily active users increase from 11.79 to 14-15
- **Secondary Metrics**: 
  - Session frequency increases by 30%
  - Average session duration increases by 2-3 minutes
  - User retention improves by 10%

**What the Feature Is:**
A notification system that alerts users when:
- A card they're watching is moved to a new status
- A high-priority card is updated
- Cards are assigned to them
- Cards are nearing deadlines

**Implementation:**
- Push notifications (mobile)
- Browser notifications (web)
- In-app notification center
- Configurable notification preferences

**Why This Will Work:**
The data shows users are actively moving cards (avg 2-3 changes per active card). Notifications create a feedback loop that brings users back to the app to see updates and make their own changes.

---

### Idea 2: Card Templates & Quick Actions

**Hypothesis:**
If we reduce the friction of creating and moving cards with templates and quick actions, users will manage more cards and visit the app more frequently, increasing daily active users by 10-15%.

**Expected Impact:**
- **Primary Metric**: Daily active users increase from 11.79 to 13-14
- **Secondary Metrics**:
  - Cards created per user increases by 40%
  - Status changes per day increases by 25%
  - Time to complete workflow decreases by 30%

**What the Feature Is:**
1. **Card Templates**: Pre-configured card types (e.g., "Shipping Request", "Customer Issue", "Internal Task")
2. **Quick Actions**: 
   - Bulk move cards
   - Keyboard shortcuts (e.g., "1" for backlog, "2" for in-progress)
   - Right-click context menu
   - Drag-and-drop multiple cards

**Implementation:**
- Template library with customizable fields
- Keyboard shortcut overlay (press "?" to see shortcuts)
- Multi-select with Shift/Ctrl+Click
- Quick action toolbar on hover

**Why This Will Work:**
Current data shows users are engaged but limited by manual card manipulation. Reducing friction will encourage users to manage more items, creating more reasons to return to the app daily.

---

### Idea 3: Daily Digest & Analytics Dashboard

**Hypothesis:**
If we provide users with a daily summary of their card activity and team progress, they'll develop a habit of checking the app first thing each morning, increasing daily active users by 20-25% and improving retention.

**Expected Impact:**
- **Primary Metric**: Daily active users increase from 11.79 to 15-16
- **Secondary Metrics**:
  - Morning session starts (8-10am) increase by 50%
  - Weekly active users increase by 15%
  - User retention (30-day) improves by 20%

**What the Feature Is:**
1. **Daily Digest Email** (sent at 8am user's timezone):
   - Cards completed yesterday
   - Cards moved to in-progress
   - High-priority items needing attention
   - Team activity summary

2. **Personal Analytics Dashboard**:
   - Cards completed this week/month
   - Average time in each status
   - Productivity trends
   - Comparison to previous periods

3. **Team Dashboard**:
   - Team velocity (cards completed per week)
   - Bottleneck identification (cards stuck in status)
   - Workload distribution

**Implementation:**
- Automated email system with personalized content
- New "Analytics" tab in the app
- Interactive charts (using Chart.js or D3.js)
- Export reports as PDF

**Why This Will Work:**
The 224% increase in DAU after the Kanban Board shows users value visibility into their work. Analytics and daily digests create a habit loop: receive email → check app → see progress → feel accomplished → return tomorrow. This taps into the psychological reward of tracking progress.

---

## Wireframe Concepts

### Feature 1: Notifications
```
┌─────────────────────────────────────┐
│  🔔 Notifications (3)               │
├─────────────────────────────────────┤
│  ● Card "Ship to NYC" moved to      │
│    Complete by John                 │
│    2 minutes ago                    │
├─────────────────────────────────────┤
│  ● High priority card assigned      │
│    to you: "Urgent Delivery"        │
│    15 minutes ago                   │
├─────────────────────────────────────┤
│  ● Card "LA Shipment" updated       │
│    by Sarah                         │
│    1 hour ago                       │
└─────────────────────────────────────┘
```

### Feature 2: Quick Actions
```
┌─────────────────────────────────────┐
│  [+ New Card ▼]  [Templates ▼]      │
│                                     │
│  Templates:                         │
│  • 📦 Shipping Request              │
│  • 🚨 Customer Issue                │
│  • ⚙️  Internal Task                │
│  • 📋 Custom...                     │
└─────────────────────────────────────┘

Keyboard Shortcuts:
• N - New card
• 1 - Move to Backlog
• 2 - Move to In Progress  
• 3 - Move to Complete
• Shift+Click - Multi-select
```

### Feature 3: Analytics Dashboard
```
┌─────────────────────────────────────┐
│  📊 Your Analytics                  │
├─────────────────────────────────────┤
│  This Week:                         │
│  ✓ 12 cards completed               │
│  → 8 cards in progress              │
│  ⏱  Avg time: 2.3 days per card     │
│                                     │
│  [Chart: Cards Completed Over Time] │
│   ▁▂▃▅▇█▇▅▃▂▁                       │
│                                     │
│  Productivity: ↑ 15% vs last week   │
└─────────────────────────────────────┘
```

---

## Implementation Priority

**Recommended Order:**
1. **Feature 3 (Analytics Dashboard)** - Highest ROI, leverages existing data
2. **Feature 1 (Notifications)** - Creates engagement loop
3. **Feature 2 (Quick Actions)** - Reduces friction for power users

**Rationale:**
Start with analytics to understand user behavior better, then add notifications to drive engagement, finally optimize the experience with quick actions.

---

## Success Metrics

**Primary KPI**: Daily Active Users
- Target: Increase from 11.79 to 15+ (27% increase)

**Secondary KPIs**:
- Session frequency per user
- Cards created per user per day
- Status changes per day
- 30-day retention rate
- Time to complete workflow

**Measurement Plan**:
- A/B test each feature with 50% of users
- Monitor metrics for 30 days
- Iterate based on user feedback
- Roll out to 100% if metrics improve

---

## Conclusion

The Kanban Board feature's success (224% increase in DAU) proves users want visual, interactive tools for managing their work. The three proposed features build on this success by:

1. **Notifications** - Bringing users back more frequently
2. **Quick Actions** - Making power users more efficient
3. **Analytics** - Creating habit loops and providing value

Each feature is data-driven, has clear success metrics, and builds on the proven engagement model of the Kanban Board.

---

**Prepared by:** Siddharth (siddharth10ss)  
**Date:** November 9, 2025  
**Module:** Y Combinator Module 3 - Analytics
