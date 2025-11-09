#!/usr/bin/env python3
"""
Convert THREE_ACTIONABLE_IDEAS.md to HTML for easy PDF conversion
"""

import markdown2

# Read the markdown file
with open('THREE_ACTIONABLE_IDEAS.md', 'r', encoding='utf-8') as f:
    md_content = f.read()

# Convert to HTML
html_content = markdown2.markdown(md_content, extras=['tables', 'fenced-code-blocks', 'header-ids'])

# Create a styled HTML document
html_template = f"""<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Three Actionable Ideas - Shiptivitas</title>
    <style>
        @media print {{
            body {{
                margin: 0;
                padding: 20px;
            }}
            .page-break {{
                page-break-before: always;
            }}
        }}
        
        body {{
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 900px;
            margin: 0 auto;
            padding: 40px;
            background: white;
        }}
        
        h1 {{
            color: #2c3e50;
            border-bottom: 3px solid #3498db;
            padding-bottom: 10px;
            margin-top: 40px;
        }}
        
        h2 {{
            color: #34495e;
            border-bottom: 2px solid #95a5a6;
            padding-bottom: 8px;
            margin-top: 30px;
            page-break-after: avoid;
        }}
        
        h3 {{
            color: #7f8c8d;
            margin-top: 20px;
        }}
        
        p {{
            margin: 10px 0;
            text-align: justify;
        }}
        
        ul, ol {{
            margin: 10px 0;
            padding-left: 30px;
        }}
        
        li {{
            margin: 5px 0;
        }}
        
        code {{
            background: #f4f4f4;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
        }}
        
        pre {{
            background: #f4f4f4;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
            border-left: 4px solid #3498db;
        }}
        
        pre code {{
            background: none;
            padding: 0;
        }}
        
        blockquote {{
            border-left: 4px solid #3498db;
            padding-left: 20px;
            margin: 20px 0;
            color: #555;
            font-style: italic;
        }}
        
        table {{
            border-collapse: collapse;
            width: 100%;
            margin: 20px 0;
        }}
        
        th, td {{
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }}
        
        th {{
            background-color: #3498db;
            color: white;
        }}
        
        tr:nth-child(even) {{
            background-color: #f9f9f9;
        }}
        
        hr {{
            border: none;
            border-top: 2px solid #ecf0f1;
            margin: 30px 0;
        }}
        
        .header {{
            text-align: center;
            margin-bottom: 40px;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 10px;
        }}
        
        .header h1 {{
            color: white;
            border: none;
            margin: 0;
        }}
        
        .header p {{
            margin: 5px 0;
            opacity: 0.9;
        }}
        
        .emoji {{
            font-size: 1.2em;
        }}
        
        strong {{
            color: #2c3e50;
        }}
    </style>
</head>
<body>
    <div class="header">
        <h1>Three Actionable Ideas to Increase Daily Active Users</h1>
        <p><strong>Prepared for:</strong> Y Combinator Shiptivitas</p>
        <p><strong>Prepared by:</strong> Siddharth (siddharth10ss)</p>
        <p><strong>Date:</strong> November 9, 2025</p>
    </div>
    
    {html_content}
    
    <hr>
    <p style="text-align: center; color: #7f8c8d; margin-top: 40px;">
        <strong>End of Document</strong><br>
        Generated from THREE_ACTIONABLE_IDEAS.md
    </p>
</body>
</html>
"""

# Write the HTML file
with open('THREE_ACTIONABLE_IDEAS.html', 'w', encoding='utf-8') as f:
    f.write(html_template)

print("✅ Successfully converted to HTML!")
print("📄 Output file: THREE_ACTIONABLE_IDEAS.html")
print("\nTo convert to PDF:")
print("1. Open THREE_ACTIONABLE_IDEAS.html in your browser")
print("2. Press Ctrl+P (or Cmd+P on Mac)")
print("3. Select 'Save as PDF' as the printer")
print("4. Click 'Save'")
