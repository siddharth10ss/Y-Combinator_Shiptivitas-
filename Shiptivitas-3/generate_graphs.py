#!/usr/bin/env python3
"""
Generate graphs for Shiptivitas Analytics
Requires: matplotlib, pandas
Install: pip install matplotlib pandas
"""

import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
from datetime import datetime

# Set style
plt.style.use('seaborn-v0_8-darkgrid')

# Graph 1: Daily Active Users Before and After Feature
print("Generating Graph 1: Daily Active Users...")
df_users = pd.read_csv('daily_active_users.csv', encoding='utf-16')
df_users['login_date'] = pd.to_datetime(df_users['login_date'])

fig, ax = plt.subplots(figsize=(14, 6))

# Plot before and after separately with different colors
before = df_users[df_users['period'] == 'Before']
after = df_users[df_users['period'] == 'After']

ax.plot(before['login_date'], before['daily_active_users'], 
        marker='o', linestyle='-', linewidth=2, markersize=4,
        color='#FF6B6B', label='Before Feature', alpha=0.7)

ax.plot(after['login_date'], after['daily_active_users'], 
        marker='o', linestyle='-', linewidth=2, markersize=4,
        color='#4ECDC4', label='After Feature', alpha=0.7)

# Add vertical line at feature release
feature_date = datetime(2018, 6, 2)
ax.axvline(x=feature_date, color='red', linestyle='--', linewidth=2, 
           label='Feature Release (Jun 2, 2018)', alpha=0.8)

# Add average lines
before_avg = before['daily_active_users'].mean()
after_avg = after['daily_active_users'].mean()

ax.axhline(y=before_avg, color='#FF6B6B', linestyle=':', linewidth=2, 
           alpha=0.5, label=f'Before Avg: {before_avg:.2f}')
ax.axhline(y=after_avg, color='#4ECDC4', linestyle=':', linewidth=2, 
           alpha=0.5, label=f'After Avg: {after_avg:.2f}')

# Formatting
ax.set_xlabel('Date', fontsize=12, fontweight='bold')
ax.set_ylabel('Daily Active Users', fontsize=12, fontweight='bold')
ax.set_title('Daily Active Users: Before vs After Kanban Board Feature\n+224% Increase in Average DAU', 
             fontsize=14, fontweight='bold', pad=20)
ax.legend(loc='upper left', fontsize=10)
ax.grid(True, alpha=0.3)

# Format x-axis
ax.xaxis.set_major_formatter(mdates.DateFormatter('%b %Y'))
ax.xaxis.set_major_locator(mdates.MonthLocator(interval=2))
plt.xticks(rotation=45)

plt.tight_layout()
plt.savefig('graph1_daily_active_users.png', dpi=300, bbox_inches='tight')
print("✓ Saved: graph1_daily_active_users.png")

# Graph 2: Number of Status Changes by Card
print("\nGenerating Graph 2: Status Changes by Card...")
df_changes = pd.read_csv('card_status_changes.csv', encoding='utf-16')

# Get top 20 cards
top_cards = df_changes.nlargest(20, 'total_changes')

fig, ax = plt.subplots(figsize=(12, 8))

# Create horizontal bar chart
bars = ax.barh(range(len(top_cards)), top_cards['total_changes'], 
               color='#95E1D3', edgecolor='#38A3A5', linewidth=1.5)

# Color the top 5 differently
for i in range(min(5, len(bars))):
    bars[i].set_color('#F38181')
    bars[i].set_edgecolor('#AA4465')

# Formatting
ax.set_yticks(range(len(top_cards)))
ax.set_yticklabels([f'Card {id}' for id in top_cards['cardID']])
ax.set_xlabel('Number of Status Changes', fontsize=12, fontweight='bold')
ax.set_ylabel('Card ID', fontsize=12, fontweight='bold')
ax.set_title('Top 20 Cards by Number of Status Changes\nHigher engagement indicates active workflow management', 
             fontsize=14, fontweight='bold', pad=20)

# Add value labels
for i, (idx, row) in enumerate(top_cards.iterrows()):
    ax.text(row['total_changes'] + 0.1, i, str(int(row['total_changes'])), 
            va='center', fontsize=10, fontweight='bold')

# Add statistics box
total_cards = len(df_changes)
avg_changes = df_changes['total_changes'].mean()
textstr = f'Total Cards: {total_cards}\nAvg Changes: {avg_changes:.2f}\nMax Changes: {df_changes["total_changes"].max()}'
props = dict(boxstyle='round', facecolor='wheat', alpha=0.5)
ax.text(0.98, 0.02, textstr, transform=ax.transAxes, fontsize=10,
        verticalalignment='bottom', horizontalalignment='right', bbox=props)

ax.grid(True, alpha=0.3, axis='x')
plt.tight_layout()
plt.savefig('graph2_card_status_changes.png', dpi=300, bbox_inches='tight')
print("✓ Saved: graph2_card_status_changes.png")

# Graph 3: Distribution of Status Changes
print("\nGenerating Graph 3: Status Change Distribution...")
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 6))

# Histogram
ax1.hist(df_changes['total_changes'], bins=range(1, df_changes['total_changes'].max() + 2), 
         color='#A8E6CF', edgecolor='#56AB91', linewidth=1.5, alpha=0.7)
ax1.set_xlabel('Number of Status Changes', fontsize=11, fontweight='bold')
ax1.set_ylabel('Number of Cards', fontsize=11, fontweight='bold')
ax1.set_title('Distribution of Status Changes per Card', fontsize=12, fontweight='bold')
ax1.grid(True, alpha=0.3, axis='y')

# Cumulative distribution
sorted_changes = df_changes['total_changes'].sort_values()
cumulative = range(1, len(sorted_changes) + 1)
ax2.plot(sorted_changes, cumulative, linewidth=2, color='#FF6B9D')
ax2.fill_between(sorted_changes, cumulative, alpha=0.3, color='#FF6B9D')
ax2.set_xlabel('Number of Status Changes', fontsize=11, fontweight='bold')
ax2.set_ylabel('Cumulative Number of Cards', fontsize=11, fontweight='bold')
ax2.set_title('Cumulative Distribution', fontsize=12, fontweight='bold')
ax2.grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig('graph3_status_change_distribution.png', dpi=300, bbox_inches='tight')
print("✓ Saved: graph3_status_change_distribution.png")

print("\n✅ All graphs generated successfully!")
print("\nGenerated files:")
print("  - graph1_daily_active_users.png")
print("  - graph2_card_status_changes.png")
print("  - graph3_status_change_distribution.png")
