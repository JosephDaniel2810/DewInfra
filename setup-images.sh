#!/bin/bash

# DewInfra Website - Image Setup Script
echo "🏗️ Setting up image directories for DewInfra website..."

# Create image directories
mkdir -p public/images/projects
mkdir -p public/images/services
mkdir -p public/images/logo

echo "✅ Created directories:"
echo "   📁 public/images/projects/"
echo "   📁 public/images/services/"
echo "   📁 public/images/logo/"

echo ""
echo "📸 Next steps:"
echo "1. Add your project photos to public/images/projects/"
echo "2. Add service images to public/images/services/"
echo "3. Add company logo to public/images/logo/ (optional)"
echo ""
echo "💡 Recommended image names:"
echo "   Projects: commercial-building.jpg, infrastructure-bridge.jpg, industrial-facility.jpg"
echo "   Services: construction-site.jpg, blueprint-planning.jpg, safety-equipment.jpg"
echo ""
echo "🎯 The hero section will automatically cycle through these images!"
echo "🚀 Run 'npm run dev' to see your website with the new navbar and image carousel!"
