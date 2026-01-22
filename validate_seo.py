#!/usr/bin/env python3
"""
BoardBlocs SEO Validation Script
Validates that all pages have comprehensive SEO optimization
"""

import os
import re
from pathlib import Path
from collections import defaultdict

BASE_DIR = Path("/Users/corbandamukaitis/Desktop/Work Projects/BoardBlocs-DocMersion-Fork/boardblocs-docmersion-fork-anti-gravity-SEO")

def validate_page_seo(file_path):
    """Validate SEO elements in an HTML page"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    results = {
        'file': file_path.name,
        'checks': {}
    }
    
    # Check for required meta tags
    checks = {
        'title': r'<title>.*?</title>',
        'description': r'<meta name="description"',
        'keywords': r'<meta name="keywords"',
        'canonical': r'<link rel="canonical"',
        'og:title': r'<meta property="og:title"',
        'og:description': r'<meta property="og:description"',
        'og:image': r'<meta property="og:image"',
        'twitter:card': r'<meta name="twitter:card"',
        'robots': r'<meta name="robots"',
        'author': r'<meta name="author"'
    }
    
    for check_name, pattern in checks.items():
        results['checks'][check_name] = bool(re.search(pattern, content))
    
    # Check title length (should be 50-70 characters)
    title_match = re.search(r'<title>(.*?)</title>', content)
    if title_match:
        title_length = len(title_match.group(1))
        results['title_length'] = title_length
        results['checks']['title_length_ok'] = 30 <= title_length <= 70
    
    # Check description length (should be 120-160 characters)
    desc_match = re.search(r'<meta name="description" content="(.*?)"', content)
    if desc_match:
        desc_length = len(desc_match.group(1))
        results['desc_length'] = desc_length
        results['checks']['desc_length_ok'] = 120 <= desc_length <= 180
    
    return results

def main():
    print("=" * 70)
    print("BoardBlocs SEO Validation Report")
    print("=" * 70)
    print()
    
    # Get all HTML files
    html_files = list(BASE_DIR.glob("*.html"))
    
    # Filter out old/backup files
    html_files = [f for f in html_files if not any(x in f.name for x in ['old', 'copy', 'backup'])]
    
    all_results = []
    total_pages = 0
    perfect_pages = 0
    
    for html_file in sorted(html_files):
        results = validate_page_seo(html_file)
        all_results.append(results)
        total_pages += 1
        
        # Count perfect pages (all checks passed)
        if all(results['checks'].values()):
            perfect_pages += 1
    
    # Generate summary
    print(f"📊 Total Pages Scanned: {total_pages}")
    print(f"✅ Perfect SEO Pages: {perfect_pages}")
    print(f"⚠️  Needs Attention: {total_pages - perfect_pages}")
    print()
    print("=" * 70)
    print()
    
    # Detailed reports
    print("📋 Detailed Page Reports:")
    print()
    
    for result in all_results:
        passed = sum(1 for v in result['checks'].values() if v)
        total = len(result['checks'])
        percentage = (passed / total) * 100
        
        status = "✅" if percentage == 100 else "⚠️ " if percentage >= 75 else "❌"
        
        print(f"{status} {result['file']:<40} [{passed}/{total} checks - {percentage:.0f}%]")
        
        # Show missing elements
        missing = [k for k, v in result['checks'].items() if not v]
        if missing:
            print(f"    Missing: {', '.join(missing)}")
        
        # Show title/desc length issues
        if 'title_length' in result:
            if not result['checks'].get('title_length_ok'):
                print(f"    Title length: {result['title_length']} chars (optimal: 30-70)")
        
        if 'desc_length' in result:
            if not result['checks'].get('desc_length_ok'):
                print(f"    Description length: {result['desc_length']} chars (optimal: 120-180)")
        
        print()
    
    # Summary by check type
    print("=" * 70)
    print("📈 SEO Element Coverage:")
    print()
    
    check_coverage = defaultdict(int)
    for result in all_results:
        for check, passed in result['checks'].items():
            if passed and not check.endswith('_ok'):
                check_coverage[check] += 1
    
    for check, count in sorted(check_coverage.items()):
        percentage = (count / total_pages) * 100
        bar = "█" * int(percentage / 5)
        print(f"{check:<20} {bar:<20} {count}/{total_pages} ({percentage:.0f}%)")
    
    print()
    print("=" * 70)
    print("SEO Validation Complete!")
    print("=" * 70)

if __name__ == "__main__":
    main()
