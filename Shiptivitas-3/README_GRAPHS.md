# How to Generate Graphs

## Prerequisites
Install Python and required libraries:
```bash
pip install matplotlib pandas
```

## Generate Graphs
Run the Python script:
```bash
python generate_graphs.py
```

This will create three graphs:
1. **graph1_daily_active_users.png** - Daily active users before/after feature
2. **graph2_card_status_changes.png** - Top 20 cards by status changes
3. **graph3_status_change_distribution.png** - Distribution of status changes

## Alternative: Manual Graph Creation

If you prefer to create graphs manually, use the CSV files:
- `daily_active_users.csv` - For Graph 1
- `card_status_changes.csv` - For Graph 2

Import these into Excel, Google Sheets, or any data visualization tool.

## Graph Specifications

### Graph 1: Daily Active Users
- **Type**: Line chart with two series
- **X-axis**: Date (Feb 2018 - Feb 2019)
- **Y-axis**: Number of daily active users
- **Series 1**: Before Feature (red) - Feb 3 to Jun 1, 2018
- **Series 2**: After Feature (blue) - Jun 2, 2018 to Feb 1, 2019
- **Vertical line**: Feature release date (Jun 2, 2018)
- **Horizontal lines**: Average before (3.63) and after (11.79)

### Graph 2: Card Status Changes
- **Type**: Horizontal bar chart
- **X-axis**: Number of status changes
- **Y-axis**: Card ID
- **Show**: Top 20 cards
- **Highlight**: Top 5 cards in different color
- **Include**: Total cards and average changes

### Graph 3: Status Change Distribution (Optional)
- **Type**: Histogram
- **X-axis**: Number of status changes
- **Y-axis**: Number of cards
- **Shows**: How many cards have 1, 2, 3, etc. status changes
