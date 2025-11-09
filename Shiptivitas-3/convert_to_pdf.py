#!/usr/bin/env python3
"""
Convert THREE_ACTIONABLE_IDEAS.md to PDF
"""

import markdown_pdf

# Convert markdown to PDF
markdown_pdf.MarkdownPdf(toc_level=2).convert_md_to_pdf(
    input_file='THREE_ACTIONABLE_IDEAS.md',
    output_file='THREE_ACTIONABLE_IDEAS.pdf'
)

print("✅ Successfully converted THREE_ACTIONABLE_IDEAS.md to PDF!")
print("📄 Output file: THREE_ACTIONABLE_IDEAS.pdf")
