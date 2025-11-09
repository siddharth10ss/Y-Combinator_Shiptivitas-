# Module 3 Submission Instructions

## Files to Submit

### 1. Screenshot of Graph 1: Daily Active Users ✅
**File:** `graph1_daily_active_users.png`

This graph shows:
- Daily active users from Feb 2018 to Feb 2019
- Clear distinction between "Before Feature" (red) and "After Feature" (blue)
- Feature release date marked with vertical line (June 2, 2018)
- Average lines showing 3.63 (before) and 11.79 (after)
- **224% increase in daily active users**

### 2. Screenshot of Graph 2: Card Status Changes ✅
**File:** `graph2_card_status_changes.png`

This graph shows:
- Top 20 cards by number of status changes
- Horizontal bar chart with Card IDs
- Top 5 cards highlighted in red
- Statistics box showing total cards and averages
- Card #187 has the most changes (5)

### 3. SQL File ✅
**File:** `answer.sql`

Contains all SQL queries:
- Query 1A: Daily active users with period indicator
- Query 1B: Average daily users by period (summary statistics)
- Query 2A: Status changes per card
- Query 2B: Status transition patterns
- Query 2C: Daily status change activity

### 4. Document of Three Actionable Ideas ✅
**File:** `THREE_ACTIONABLE_IDEAS.md` (convert to PDF)

Contains:
- **Idea 1:** Card Activity Notifications
  - Hypothesis, Expected Impact, Feature Description
  - Wireframes included
  
- **Idea 2:** Card Templates & Quick Actions
  - Hypothesis, Expected Impact, Feature Description
  - Wireframes included
  
- **Idea 3:** Daily Digest & Analytics Dashboard
  - Hypothesis, Expected Impact, Feature Description
  - Wireframes included

- Implementation priority and roadmap
- Success measurement plan
- A/B testing strategy

## How to Convert Markdown to PDF

### Option 1: Using Pandoc (Recommended)
```bash
pandoc THREE_ACTIONABLE_IDEAS.md -o THREE_ACTIONABLE_IDEAS.pdf --pdf-engine=xelatex
```

### Option 2: Using VS Code
1. Install "Markdown PDF" extension
2. Open THREE_ACTIONABLE_IDEAS.md
3. Right-click → "Markdown PDF: Export (pdf)"

### Option 3: Using Online Tool
1. Go to https://www.markdowntopdf.com/
2. Upload THREE_ACTIONABLE_IDEAS.md
3. Download the PDF

### Option 4: Print to PDF
1. Open THREE_ACTIONABLE_IDEAS.md in any markdown viewer
2. Use browser's "Print to PDF" function

## Additional Files (Optional)

### Bonus Graph 3: Status Change Distribution
**File:** `graph3_status_change_distribution.png`

Shows:
- Histogram of status changes per card
- Cumulative distribution curve
- Helps understand engagement patterns

### HTML Visualizations (Interactive)
- `graph1_daily_users.html` - Interactive version of Graph 1
- `graph2_card_changes.html` - Interactive version of Graph 2

Open these in a browser for interactive charts.

## Verification Checklist

Before submitting, verify:
- [ ] graph1_daily_active_users.png is clear and readable
- [ ] graph2_card_status_changes.png is clear and readable
- [ ] answer.sql contains all queries
- [ ] THREE_ACTIONABLE_IDEAS.pdf is properly formatted
- [ ] All files are named correctly
- [ ] Screenshots show the full graph with labels

## Summary of Deliverables

1. ✅ **Graph 1 Screenshot:** graph1_daily_active_users.png (558 KB)
2. ✅ **Graph 2 Screenshot:** graph2_card_status_changes.png (274 KB)
3. ✅ **SQL File:** answer.sql (3 KB)
4. ✅ **Ideas Document:** THREE_ACTIONABLE_IDEAS.pdf (to be converted)

## Key Findings to Highlight

When submitting, emphasize:
- **224% increase** in daily active users after Kanban Board launch
- Before: 3.63 avg DAU → After: 11.79 avg DAU
- Users actively engaging (avg 2-3 status changes per card)
- Three data-driven feature ideas with clear ROI
- Expected combined impact: +45-50% DAU

## Repository

All files are also available at:
https://github.com/siddharth10ss/Y-Combinator_Shiptivitas-.git

Navigate to: `Shiptivitas-3/`

---

**Good luck with your submission!** 🚀
