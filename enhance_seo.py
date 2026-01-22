#!/usr/bin/env python3
"""
BoardBlocs SEO Enhancement Script
Adds comprehensive SEO meta tags to all HTML pages
"""

import os
import re
from pathlib import Path

# Base directory
BASE_DIR = Path("/Users/corbandamukaitis/Desktop/Work Projects/BoardBlocs-DocMersion-Fork/boardblocs-docmersion-fork-anti-gravity-SEO")

# Page-specific SEO configurations
SEO_CONFIG = {
    "about-us.html": {
        "title": "About Us – BoardBlocs | Modern Board Portal Software Team",
        "description": "Learn about BoardBlocs - we're building modern board portal software for public-facing boards, combining a board website, private workspace, and accessible document center.",
        "keywords": "about boardblocs, board portal company, board management team, board software developers, board portal history"
    },
    "pricing.html": {
        "title": "Pricing – BoardBlocs Board Portal Software | Custom Plans & Quotes",
        "description": "Simple, transparent pricing for BoardBlocs board portal software. One platform for your public board website, private workspace, and accessible documents. Get a custom quote today.",
        "keywords": "board portal pricing, board management software cost, board portal plans, board software pricing, affordable board portal"
    },
    "blog.html": {
        "title": "Blog – Board Governance Insights & Best Practices | BoardBlocs",
        "description": "Insights and best practices for board governance, meeting management, document accessibility, and public transparency. Expert advice from the BoardBlocs team.",
        "keywords": "board governance blog, board management tips, meeting management best practices, board portal insights, governance resources"
    },
    "contact-us.html": {
        "title": "Contact Us – BoardBlocs | Get in Touch with Our Team",
        "description": "Contact BoardBlocs for board portal software inquiries, demos, support, or sales. We're here to help your board succeed with modern management tools.",
        "keywords": "contact boardblocs, board portal support, board software sales, demo request, customer service"
    },
   "book-demo.html": {
        "title": "Book a Demo – See BoardBlocs Board Portal in Action",
        "description": "Schedule a personalized demo of BoardBlocs board portal software. See how we help school boards, government, healthcare, and nonprofits manage meetings and documents.",
        "keywords": "board portal demo, software demonstration, schedule demo, board management demo, free trial"
    },
    "accessibility.html": {
        "title": "Accessibility Features – ADA Compliant Board Portal | BoardBlocs",
        "description": "BoardBlocs offers comprehensive accessibility features with ADA-compliant document conversion, screen reader support, and WCAG 2.1 AA standards for inclusive board management.",
        "keywords": "ADA compliant board portal, accessible board software, WCAG compliance, accessible documents, screen reader support, disability access"
    },
    "discussions.html": {
        "title": "Board Discussions & Communication – Secure Collaboration | BoardBlocs",
        "description": "Facilitate secure board discussions with avatar-based privacy, sentiment tracking, and organized threaded conversations. Keep board communication professional and productive.",
        "keywords": "board discussions, board communication, secure messaging, board collaboration, threaded discussions, sentiment analysis"
    },
    "meetings-and-agenda.html": {
        "title": "Meeting & Agenda Management – Streamline Board Meetings | BoardBlocs",
        "description": "Plan, organize, and share board meetings with clear agendas, minutes, and action items. Streamline your board's meeting management workflow.",
        "keywords": "meeting management, agenda software, board meetings, meeting minutes, action items, agenda builder"
    },
    "policies-&-documents.html": {
        "title": "Policy & Document Management – Centralized Storage | BoardBlocs",
        "description": "Centralized, accessible storage for all board policies and ADA-friendly documents. Search, organize, and share important files with ease.",
        "keywords": "document management, policy storage, document repository, file management, searchable documents, policy library"
    },
    "public-and-private-sites.html": {
        "title": "Public & Private Board Sites – Dual Portal Solution | BoardBlocs",
        "description": "Get both ADA-compliant public board websites and secure private workspaces for agendas, minutes, policies, and internal collaboration.",
        "keywords": "public board site, private workspace, dual portal, public transparency, private board portal, board website"
    },
    "mobileapp.html": {
        "title": "Mobile App & Notifications – Board Access On The Go | BoardBlocs",
        "description": "Stay connected with the BoardBlocs mobile app. Access meetings, documents, and discussions from anywhere with push notifications and offline support.",
        "keywords": "board portal mobile app, iOS app, Android app, push notifications, mobile access, offline documents"
    },
    "integrations.html": {
        "title": "Integrations – Connect Your Board's Tools | BoardBlocs",
        "description": "Seamlessly integrate BoardBlocs with Google Workspace, Microsoft 365, Zoom, YouTube, and other tools your board already uses.",
        "keywords": "board portal integrations, Google Workspace integration, Microsoft 365, Zoom integration, API integrations"
    },
    "welcome-chat.html": {
        "title": "AI Answers & Document Search – Smart Board Portal | BoardBlocs",
        "description": "Ask questions about policies and documents with AI-powered search. Get instant answers from your board's knowledge base.",
        "keywords": "AI board portal, document search, policy search, AI assistant, smart search, chatbot"
    },
    "board-news.html": {
        "title": "Board News & Updates – Community Communication | BoardBlocs",
        "description": "Share timely board updates, announcements, and highlights with your community. Keep stakeholders informed and engaged.",
        "keywords": "board news, board updates, announcements, community updates, board communication"
    },
    "committees-&-groups.html": {
        "title": "Committees & Groups – Organize Board Teams | BoardBlocs",
        "description": "Create dedicated spaces for committees and working groups. Keep teams aligned with organized workspaces and clear communication.",
        "keywords": "board committees, working groups, committee management, team collaboration, subcommittees"
    },
    "education.html": {
        "title": "Board Portal for Schools & Education | BoardBlocs",
        "description": "Purpose-built board portal software for school boards and educational institutions. Manage meetings, policies, and public transparency with ease.",
        "keywords": "school board software, education board portal, school board meetings, K-12 board management, district board portal"
    },
    "government.html": {
        "title": "Government Board Portal Software – Public Sector | BoardBlocs",
        "description": "Board portal software designed for government agencies and municipalities. Meet public transparency requirements with ADA-compliant tools.",
        "keywords": "government board portal, municipal board software, public sector board management, city council software, transparency compliance"
    },
    "healthcare.html": {
        "title": "Healthcare Board Portal – Hospital & Medical Boards | BoardBlocs",
        "description": "Secure board portal software for healthcare organizations, hospital boards, and medical associations. HIPAA-aware with enterprise security.",
        "keywords": "healthcare board portal, hospital board software, medical board management, HIPAA compliant, healthcare governance"
    },
    "non-profit.html": {
        "title": "Nonprofit Board Portal Software – 501(c)(3) Organizations | BoardBlocs",
        "description": "Affordable board portal software for nonprofits and charitable organizations. Streamline governance, fundraising, and stakeholder communication.",
        "keywords": "nonprofit board portal, charity board software, 501c3 board management, foundation board portal, nonprofit governance"
    },
    "associations.html": {
        "title": "Association Board Portal – Member Organizations | BoardBlocs",
        "description": "Board management software for trade associations, professional organizations, and membership groups. Enhance governance and member engagement.",
        "keywords": "association board portal, trade association software, professional organization board, membership management"
    },
    "community-organizations.html": {
        "title": "Community Organization Board Portal – Local Groups | BoardBlocs",
        "description": "Board portal software for HOAs, community groups, and civic organizations. Simple, affordable governance tools for local boards.",
        "keywords": "HOA board portal, community board software, civic organization management, local board portal"
    },
    "real-estate.html": {
        "title": "Real Estate Board Portal – Property Management Boards | BoardBlocs",
        "description": "Board management software for real estate boards, property management companies, and real estate associations.",
        "keywords": "real estate board portal, property management board, real estate association software"
    },
    "technology.html": {
        "title": "Technology Board Portal – Tech Company Boards | BoardBlocs",
        "description": "Modern board portal software for technology companies and startups. Scalable, secure, and built for fast-moving boards.",
        "keywords": "tech board portal, startup board software, technology company governance, SaaS board management"
    }
}

def enhance_page_seo(file_path, config):
    """Add comprehensive SEO meta tags to an HTML page"""
    print(f"Processing: {file_path.name}")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if already has enhanced SEO (keywords meta tag)
    if 'name="keywords"' in content:
        print(f"  ✓ Already optimized: {file_path.name}")
        return False
    
    # Extract existing title and description
    title_match = re.search(r'<title>(.*?)</title>', content, re.DOTALL)
    desc_match = re.search(r'<meta name="description" content="(.*?)"', content)
    
    if not title_match or not desc_match:
        print(f"  ⚠ Skipping: Could not find title or description in {file_path.name}")
        return False
    
    # Build enhanced head section
    enhanced_meta = f'''
    <!-- Primary SEO Meta Tags -->
    <title>{config['title']}</title>
    <meta name="description" content="{config['description']}">
    <meta name="keywords" content="{config['keywords']}">
    <meta name="author" content="BoardBlocs">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="googlebot" content="index, follow">
'''
    
    # Replace old title and description
    content = re.sub(r'<title>.*?</title>', f'<title>{config["title"]}</title>', content, flags=re.DOTALL)
    content = re.sub(r'<meta name="description" content=".*?"', f'<meta name="description" content="{config["description"]}"', content)
    
    # Add keywords and other meta tags after description
    if 'name="description"' in content:
        content = re.sub(
            r'(<meta name="description" content=".*?">)',
            r'\1\n    <meta name="keywords" content="' + config['keywords'] + '">\n    <meta name="author" content="BoardBlocs">\n    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">\n    <meta name="googlebot" content="index, follow">',
            content
        )
    
    # Enhance Open Graph tags
    if 'property="og:title"' in content:
        content = re.sub(r'<meta property="og:title" content=".*?"', f'<meta property="og:title" content="{config["title"]}"', content)
        content = re.sub(r'<meta property="og:description" content=".*?"', f'<meta property="og:description" content="{config["description"]}"', content)
        
        # Add missing OG tags if not present
        if 'og:image:width' not in content:
            content = re.sub(
                r'(<meta property="og:image" content=".*?">)',
                r'\1\n    <meta property="og:image:width" content="1200">\n    <meta property="og:image:height" content="630">\n    <meta property="og:image:alt" content="BoardBlocs Board Portal Software">',
                content
            )
        if 'og:locale' not in content:
            content = re.sub(
                r'(<meta property="og:site_name".*?">)',
                r'\1\n    <meta property="og:locale" content="en_US">',
                content
            )
    
    # Enhance Twitter tags
    if 'name="twitter:title"' in content:
        content = re.sub(r'<meta name="twitter:title" content=".*?"', f'<meta name="twitter:title" content="{config["title"]}"', content)
        content = re.sub(r'<meta name="twitter:description" content=".*?"', f'<meta name="twitter:description" content="{config["description"]}"', content)
        
        if 'twitter:image:alt' not in content:
            content = re.sub(
                r'(<meta name="twitter:image" content=".*?">)',
                r'\1\n    <meta name="twitter:image:alt" content="BoardBlocs Board Portal Software">',
                content
            )
    
    # Write back
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"  ✓ Enhanced: {file_path.name}")
    return True

def main():
    """Process all HTML files"""
    print("=" * 60)
    print("BoardBlocs SEO Enhancement Script")
    print("=" * 60)
    
    enhanced_count = 0
    skipped_count = 0
    
    for filename, config in SEO_CONFIG.items():
        file_path = BASE_DIR / filename
        if file_path.exists():
            if enhance_page_seo(file_path, config):
                enhanced_count += 1
            else:
                skipped_count += 1
        else:
            print(f"  ⚠ File not found: {filename}")
            skipped_count += 1
    
    print("\n" + "=" * 60)
    print(f"Summary: {enhanced_count} enhanced, {skipped_count} skipped")
    print("=" * 60)

if __name__ == "__main__":
    main()
