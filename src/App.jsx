import { useState, useMemo, useEffect } from "react";

// tacsion logo SVG — recreated from the PDF: lightning bolt + "tacsion" wordmark
const TacsionLogo = ({ size = 48 }) => (
  <svg width={size * 2.6} height={size} viewBox="0 0 130 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Lightning bolt icon */}
    
    {/* "tacsion" wordmark */}
    <text x="34" y="34" fontFamily="Georgia, 'Times New Roman', serif" fontSize="26" fontWeight="700" fill="#2d7a3a" letterSpacing="1">
      tacsfon FUTA
    </text>
  </svg>
);

const data = [
  { code: "AEC", name: "Agricultural Economics", skills: [
    { skill: "e-Commerce", course: "Google E-commerce Professional", url: "https://www.coursera.org/professional-certificates/google-ecommerce", provider: "Coursera" },
    { skill: "Technical Report Writing", course: "Business Writing", url: "https://www.coursera.org/learn/business-writing", provider: "Uni. of Colorado" },
    { skill: "Data Analysis", course: "Data Analysis with Python", url: "https://www.coursera.org/learn/data-analysis-with-python", provider: "IBM" },
  ]},
  { code: "AGE", name: "Agricultural Engineering", skills: [
    { skill: "Python", course: "Python for Everybody", url: "https://www.coursera.org/learn/python", provider: "Uni. of Michigan" },
    { skill: "Data Analytics", course: "Google Data Analytics", url: "https://www.coursera.org/professional-certificates/google-data-analytics", provider: "Google" },
  ]},
  { code: "AGP", name: "Agricultural Production", skills: [
    { skill: "Coding", course: "Coding for Everyone: C and C++", url: "https://www.coursera.org/specializations/coding-for-everyone", provider: "UCSB" },
    { skill: "Programming", course: "Python for Everybody", url: "https://www.coursera.org/learn/python", provider: "Uni. of Michigan" },
  ]},
  { code: "AGY", name: "Agronomy", skills: [
    { skill: "Geographic Information Systems", course: "Fundamentals of GIS", url: "https://www.coursera.org/learn/gis", provider: "UC Davis" },
    { skill: "Remote Sensing / Google Earth Engine", course: "Spatial Analysis & Satellite Imagery in a GIS", url: "https://www.coursera.org/learn/start-remote-sensing", provider: "Esri" },
    { skill: "3D Modelling & Visualization", course: "Intro to 3D Printing & Additive Manufacturing", url: "https://www.coursera.org/learn/3d-printing-software", provider: "Uni. of Illinois" },
    { skill: "Field Data Collection Apps", course: "Data Collection & Processing with Python", url: "https://www.coursera.org/learn/python-data", provider: "Uni. of Michigan" },
  ]},
  { code: "ANA", name: "Anatomy", skills: [
    { skill: "Medical Imaging Interpretation", course: "AI for Medical Diagnosis", url: "https://www.coursera.org/learn/ai-for-medical-diagnosis", provider: "deeplearning.ai" },
    { skill: "AR & VR", course: "Introduction to Augmented Reality and ARCore", url: "https://www.coursera.org/learn/ar", provider: "Google" },
    { skill: "Anatomical Modelling", course: "Human Anatomy Specialization", url: "https://www.coursera.org/specializations/anatomy", provider: "Uni. of Michigan" },
  ]},
  { code: "APH", name: "Applied Physics", skills: [
    { skill: "Data Analysis", course: "Data Analysis with Python", url: "https://www.coursera.org/learn/data-analysis-with-python", provider: "IBM" },
    { skill: "Product Management", course: "Digital Product Management", url: "https://www.coursera.org/learn/uva-darden-digital-product-management", provider: "Uni. of Virginia" },
    { skill: "Social Media Marketing", course: "Social Media Marketing", url: "https://www.coursera.org/professional-certificates/coursera-social-media-marketing", provider: "Meta" },
  ]},
  { code: "ARC", name: "Architecture", skills: [
    { skill: "AutoCAD", course: "Master AutoCAD 3D: Create, Model & Transform Designs", url: "https://www.coursera.org/learn/master-autocad-3d-create-model-transform-designs", provider: "EDUCBA" },
    { skill: "Revit / BIM", course: "BIM Fundamentals for Engineers", url: "https://www.coursera.org/learn/bim-fundamentals-for-engineers", provider: "Autodesk" },
    { skill: "Rendering & Visualization", course: "Intro to 3D Printing & Additive Manufacturing", url: "https://www.coursera.org/learn/3d-printing-software", provider: "Uni. of Illinois" },
  ]},
  { code: "ARE", name: "Agricultural & Resource Economics", skills: [
    { skill: "Data Analysis & GIS", course: "Fundamentals of GIS", url: "https://www.coursera.org/learn/gis", provider: "UC Davis" },
    { skill: "Data Science", course: "IBM Data Science", url: "https://www.coursera.org/professional-certificates/ibm-data-science", provider: "IBM" },
    { skill: "Social Media Marketing", course: "Social Media Marketing", url: "https://www.coursera.org/learn/facebook-social-media-marketing", provider: "Meta" },
    { skill: "Product Management", course: "Digital Product Management", url: "https://www.coursera.org/learn/uva-darden-digital-product-management", provider: "Uni. of Virginia" },
    { skill: "Technical Report Writing", course: "Business Writing", url: "https://www.coursera.org/learn/business-writing", provider: "Uni. of Colorado" },
  ]},
  { code: "BCH", name: "Biochemistry", skills: [
    { skill: "Bioinformatics", course: "Bioinformatics Specialization", url: "https://www.coursera.org/specializations/bioinformatics", provider: "UC San Diego" },
    { skill: "Data Analysis & Statistics", course: "Statistics with Python", url: "https://www.coursera.org/specializations/statistics-with-python", provider: "Uni. of Michigan" },
    { skill: "Molecular Modelling", course: "Drug Discovery", url: "https://www.coursera.org/learn/drug-discovery", provider: "UC San Diego" },
    { skill: "Data Visualization", course: "Data Visualization with Python", url: "https://www.coursera.org/learn/python-for-data-visualization", provider: "IBM" },
  ]},
  { code: "BDG", name: "Building", skills: [
    { skill: "AutoCAD", course: "Master AutoCAD 3D: Create, Model & Transform Designs", url: "https://www.coursera.org/learn/master-autocad-3d-create-model-transform-designs", provider: "EDUCBA" },
    { skill: "Revit / SketchUp", course: "BIM Fundamentals for Engineers", url: "https://www.coursera.org/learn/bim-fundamentals-for-engineers", provider: "Autodesk" },
  ]},
  { code: "BIO", name: "Biology", skills: [
    { skill: "Python", course: "Python for Everybody", url: "https://www.coursera.org/learn/python", provider: "Uni. of Michigan" },
    { skill: "R", course: "R Programming", url: "https://www.coursera.org/learn/r-programming", provider: "Johns Hopkins" },
    { skill: "MATLAB", course: "Introduction to Programming with MATLAB", url: "https://www.coursera.org/learn/matlab", provider: "Vanderbilt" },
    { skill: "Bioimage Analysis", course: "AI for Medical Diagnosis", url: "https://www.coursera.org/learn/ai-for-medical-diagnosis", provider: "deeplearning.ai" },
  ]},
  { code: "BME", name: "Biomedical Engineering", skills: [
    { skill: "Graphics Design", course: "Graphic Design Specialization", url: "https://www.coursera.org/specializations/graphic-design", provider: "CalArts" },
    { skill: "AutoCAD / 3D Design", course: "Master AutoCAD 3D: Create, Model & Transform Designs", url: "https://www.coursera.org/learn/master-autocad-3d-create-model-transform-designs", provider: "EDUCBA" },
    { skill: "Data Analysis", course: "Data Analysis with Python", url: "https://www.coursera.org/learn/data-analysis-with-python", provider: "IBM" },
    { skill: "Python / C++", course: "Python for Everybody", url: "https://www.coursera.org/learn/python", provider: "Uni. of Michigan" },
  ]},
  { code: "CEE", name: "Chemical Engineering", skills: [
    { skill: "Process Simulation (Aspen, ChemCAD)", course: "Introduction to Chemical Engineering", url: "https://www.coursera.org/learn/chemical-engineering-thermodynamics-1", provider: "Uni. of Manchester" },
    { skill: "Python", course: "Python for Everybody", url: "https://www.coursera.org/learn/python", provider: "Uni. of Michigan" },
  ]},
  { code: "CHE", name: "Chemistry", skills: [
    { skill: "Python", course: "Python for Everybody", url: "https://www.coursera.org/learn/python", provider: "Uni. of Michigan" },
    { skill: "R", course: "R Programming", url: "https://www.coursera.org/learn/r-programming", provider: "Johns Hopkins" },
    { skill: "MATLAB", course: "Introduction to Programming with MATLAB", url: "https://www.coursera.org/learn/matlab", provider: "Vanderbilt" },
    { skill: "Computational Chemistry", course: "Drug Discovery", url: "https://www.coursera.org/learn/drug-discovery", provider: "UC San Diego" },
  ]},
  { code: "CPE", name: "Computer Engineering", skills: [
    { skill: "Programming Languages", course: "Python for Everybody", url: "https://www.coursera.org/learn/python", provider: "Uni. of Michigan" },
    { skill: "Version Control Systems", course: "Introduction to Git and GitHub", url: "https://www.coursera.org/learn/introduction-git-github", provider: "Google" },
    { skill: "Embedded Systems", course: "Programming the IoT Specialization", url: "https://www.coursera.org/specializations/iot", provider: "UC Irvine" },
    { skill: "Linux", course: "Linux for Developers", url: "https://www.coursera.org/learn/linux-for-developers", provider: "Linux Foundation" },
  ]},
  { code: "CSC", name: "Computer Science", skills: [
    { skill: "Programming Languages", course: "Python for Everybody", url: "https://www.coursera.org/learn/python", provider: "Uni. of Michigan" },
    { skill: "Database Management Systems", course: "Databases and SQL for Data Science", url: "https://www.coursera.org/learn/sql-data-science", provider: "IBM" },
    { skill: "Web Development Frameworks", course: "Meta Front-End Developer", url: "https://www.coursera.org/professional-certificates/meta-front-end-developer", provider: "Meta" },
    { skill: "Cloud Computing Platforms", course: "Google Cloud Fundamentals", url: "https://www.coursera.org/learn/gcp-fundamentals", provider: "Google" },
    { skill: "Version Control Systems", course: "Introduction to Git and GitHub", url: "https://www.coursera.org/learn/introduction-git-github", provider: "Google" },
  ]},
  { code: "CSP", name: "Crop & Soil Science", skills: [
    { skill: "GIS", course: "Fundamentals of GIS", url: "https://www.coursera.org/learn/gis", provider: "UC Davis" },
    { skill: "Data Analysis", course: "Data Analysis with Python", url: "https://www.coursera.org/learn/data-analysis-with-python", provider: "IBM" },
  ]},
  { code: "CVE", name: "Civil Engineering", skills: [
    { skill: "AutoCAD / Civil 3D", course: "Master AutoCAD 3D: Create, Model & Transform Designs", url: "https://www.coursera.org/learn/master-autocad-3d-create-model-transform-designs", provider: "EDUCBA" },
    { skill: "Revit / BIM", course: "BIM Fundamentals for Engineers", url: "https://www.coursera.org/learn/bim-fundamentals-for-engineers", provider: "Autodesk" },
  ]},
  { code: "CYS", name: "Cyber Security", skills: [
    { skill: "Wireshark / Nmap / Network Security", course: "Google Cybersecurity Certificate", url: "https://www.coursera.org/professional-certificates/google-cybersecurity", provider: "Google" },
    { skill: "Burp Suite / Metasploit", course: "Cybersecurity Attack & Defense Fundamentals", url: "https://www.coursera.org/specializations/cybersecurity-attack-defense-fundamentals", provider: "EC-Council" },
    { skill: "Cisco Packet Tracer", course: "Introduction to Networking & Cloud Computing", url: "https://www.coursera.org/learn/introduction-to-networking-and-cloud-computing", provider: "Microsoft" },
  ]},
  { code: "EEE", name: "Electrical & Electronics Engineering", skills: [
    { skill: "Embedded Systems & IoT", course: "Programming the IoT Specialization", url: "https://www.coursera.org/specializations/iot", provider: "UC Irvine" },
    { skill: "MATLAB & Simulink", course: "Introduction to Programming with MATLAB", url: "https://www.coursera.org/learn/matlab", provider: "Vanderbilt" },
    { skill: "AI / Machine Learning", course: "Machine Learning Specialization", url: "https://www.coursera.org/specializations/machine-learning-introduction", provider: "Stanford / DeepLearning.ai" },
    { skill: "Python / C++", course: "Python for Everybody", url: "https://www.coursera.org/learn/python", provider: "Uni. of Michigan" },
  ]},
  { code: "ENT", name: "Entrepreneurship", skills: [
    { skill: "CRM (Salesforce)", course: "Salesforce Sales Operations", url: "https://www.coursera.org/professional-certificates/salesforce-sales-operations", provider: "Salesforce" },
    { skill: "Marketing Automation (Mailchimp)", course: "The Strategy of Content Marketing", url: "https://www.coursera.org/learn/content-marketing", provider: "UC Davis" },
    { skill: "Graphic Design & Content Creation", course: "Graphic Design Specialization", url: "https://www.coursera.org/specializations/graphic-design", provider: "CalArts" },
  ]},
  { code: "ESM", name: "Estate Management", skills: [
    { skill: "AutoCAD", course: "Master AutoCAD 3D: Create, Model & Transform Designs", url: "https://www.coursera.org/learn/master-autocad-3d-create-model-transform-designs", provider: "EDUCBA" },
    { skill: "Data Analysis", course: "Data Analysis with Python", url: "https://www.coursera.org/learn/data-analysis-with-python", provider: "IBM" },
  ]},
  { code: "EWM", name: "Environmental & Water Management", skills: [
    { skill: "GIS & Remote Sensing", course: "Fundamentals of GIS", url: "https://www.coursera.org/learn/gis", provider: "UC Davis" },
    { skill: "Data Analysis & Statistics", course: "Statistics with Python", url: "https://www.coursera.org/specializations/statistics-with-python", provider: "Uni. of Michigan" },
    { skill: "Project Management Tools", course: "Google Project Management Certificate", url: "https://www.coursera.org/professional-certificates/google-project-management", provider: "Google" },
  ]},
  { code: "FAT", name: "Food & Agricultural Technology", skills: [
    { skill: "Digital Business Analysis", course: "Business Analysis & Process Management", url: "https://www.coursera.org/learn/business-analysis-process-management", provider: "Coursera" },
    { skill: "Data Analysis", course: "Data Analysis with Python", url: "https://www.coursera.org/learn/data-analysis-with-python", provider: "IBM" },
    { skill: "Social Media Marketing", course: "Social Media Marketing", url: "https://www.coursera.org/learn/facebook-social-media-marketing", provider: "Meta" },
  ]},
  { code: "FST", name: "Food Science & Technology", skills: [
    { skill: "Data Analysis", course: "Data Analysis with Python", url: "https://www.coursera.org/learn/data-analysis-with-python", provider: "IBM" },
    { skill: "Data Science", course: "IBM Data Science Professional Certificate", url: "https://www.coursera.org/professional-certificates/ibm-data-science", provider: "IBM" },
  ]},
  { code: "FWT", name: "Forestry & Wood Technology", skills: [
    { skill: "GIS", course: "Fundamentals of GIS", url: "https://www.coursera.org/learn/gis", provider: "UC Davis" },
    { skill: "Data Management & Analysis", course: "Data Analysis with Python", url: "https://www.coursera.org/learn/data-analysis-with-python", provider: "IBM" },
    { skill: "Environmental Modelling", course: "Climate Change & Health: Science to Action", url: "https://www.coursera.org/learn/climate-change-and-health", provider: "Yale" },
  ]},
  { code: "ICE", name: "Information & Communication Engineering", skills: [
    { skill: "Web Development", course: "Meta Front-End Developer", url: "https://www.coursera.org/professional-certificates/meta-front-end-developer", provider: "Meta" },
    { skill: "Machine Learning & AI", course: "Machine Learning Specialization", url: "https://www.coursera.org/specializations/machine-learning-introduction", provider: "Stanford / DeepLearning.ai" },
    { skill: "SQL", course: "Databases and SQL for Data Science", url: "https://www.coursera.org/learn/sql-data-science", provider: "IBM" },
  ]},
  { code: "IDD", name: "Industrial Design", skills: [
    { skill: "3D Modelling & Digital Sculpting", course: "Intro to 3D Printing & Additive Manufacturing", url: "https://www.coursera.org/learn/3d-printing-software", provider: "Uni. of Illinois" },
    { skill: "CAD & CAID Software", course: "Master AutoCAD 3D: Create, Model & Transform Designs", url: "https://www.coursera.org/learn/master-autocad-3d-create-model-transform-designs", provider: "EDUCBA" },
  ]},
  { code: "IFS", name: "Information System", skills: [
    { skill: "Programming Languages", course: "Python for Everybody", url: "https://www.coursera.org/learn/python", provider: "Uni. of Michigan" },
    { skill: "Database Management Systems", course: "Databases and SQL for Data Science", url: "https://www.coursera.org/learn/sql-data-science", provider: "IBM" },
    { skill: "Data Visualization", course: "Data Visualization with Python", url: "https://www.coursera.org/learn/python-for-data-visualization", provider: "IBM" },
    { skill: "NLP Tools", course: "Natural Language Processing Specialization", url: "https://www.coursera.org/specializations/natural-language-processing", provider: "deeplearning.ai" },
  ]},
  { code: "IFT", name: "Information Technology", skills: [
    { skill: "Programming Languages", course: "Python for Everybody", url: "https://www.coursera.org/learn/python", provider: "Uni. of Michigan" },
    { skill: "Operating Systems", course: "Linux for Developers", url: "https://www.coursera.org/learn/linux-for-developers", provider: "Linux Foundation" },
    { skill: "Networking Tools", course: "The Bits and Bytes of Computer Networking", url: "https://www.coursera.org/learn/computer-networking", provider: "Google" },
    { skill: "Network Monitoring & Management", course: "Google IT Support Professional Certificate", url: "https://www.coursera.org/professional-certificates/google-it-support", provider: "Google" },
    { skill: "IT Service Management", course: "IBM IT Project Manager", url: "https://www.coursera.org/professional-certificates/ibm-it-project-manager", provider: "Duke University" },
    { skill: "Virtualization Software", course: "Google Cloud Fundamentals", url: "https://www.coursera.org/learn/gcp-fundamentals", provider: "Google" },
  ]},
  { code: "IPE", name: "Industrial & Production Engineering", skills: [
    { skill: "AutoCAD / SOLIDWORKS", course: "Master AutoCAD 3D: Create, Model & Transform Designs", url: "https://www.coursera.org/learn/master-autocad-3d-create-model-transform-designs", provider: "EDUCBA" },
    { skill: "MATLAB / Python", course: "Introduction to Programming with MATLAB", url: "https://www.coursera.org/learn/matlab", provider: "Vanderbilt" },
  ]},
  { code: "LIS", name: "Library & Information Science", skills: [
    { skill: "Library Management Systems (Koha)", course: "Academic Information Seeking", url: "https://www.coursera.org/learn/academicinfoseek", provider: "Copenhagen" },
    { skill: "Reference Management (Mendeley)", course: "Academic Information Seeking", url: "https://www.coursera.org/learn/academicinfoseek", provider: "Copenhagen" },
    { skill: "Digital Asset Management", course: "Digital Transformation", url: "https://www.coursera.org/learn/bcg-uva-darden-digital-transformation", provider: "BCG / UVA" },
  ]},
  { code: "LTT", name: "Logistics & Transport Technology", skills: [
    { skill: "Supply Chain Management Software", course: "Supply Chain Management Specialization", url: "https://www.coursera.org/specializations/supply-chain-management", provider: "Rutgers" },
    { skill: "GIS", course: "Fundamentals of GIS", url: "https://www.coursera.org/learn/gis", provider: "UC Davis" },
    { skill: "Inventory / Fleet Management", course: "Wharton Operations Management", url: "https://www.coursera.org/learn/wharton-operations", provider: "IESE Business School" },
  ]},
  { code: "MBBS", name: "Medicine & Surgery", skills: [
    { skill: "Electronic Health Records", course: "Health Informatics Specialization", url: "https://www.coursera.org/specializations/health-informatics", provider: "Johns Hopkins" },
    { skill: "Telemedicine & Remote Care", course: "AI for Medical Diagnosis", url: "https://www.coursera.org/learn/ai-for-medical-diagnosis", provider: "deeplearning.ai" },
  ]},
  { code: "MCB", name: "Microbiology / Biotechnology", skills: [
    { skill: "Bioinformatics Tools", course: "Bioinformatics Specialization", url: "https://www.coursera.org/specializations/bioinformatics", provider: "UC San Diego" },
    { skill: "Molecular Biology Tools", course: "Genomics and Precision Medicine", url: "https://www.coursera.org/learn/precision-medicine", provider: "Johns Hopkins" },
  ]},
  { code: "MCE", name: "Mechatronics Engineering", skills: [
    { skill: "PLC Programming / Microcontrollers", course: "Programming the IoT Specialization", url: "https://www.coursera.org/specializations/iot", provider: "UC Irvine" },
    { skill: "Robotics Software (ROS)", course: "Modern Robotics Specialization", url: "https://www.coursera.org/specializations/modernrobotics", provider: "Northwestern" },
  ]},
  { code: "MEE", name: "Mechanical Engineering", skills: [
    { skill: "AutoCAD", course: "Master AutoCAD 3D: Create, Model & Transform Designs", url: "https://www.coursera.org/learn/master-autocad-3d-create-model-transform-designs", provider: "EDUCBA" },
    { skill: "SolidWorks / CAD/CAM", course: "Master AutoCAD 3D: Create, Model & Transform Designs", url: "https://www.coursera.org/learn/master-autocad-3d-create-model-transform-designs", provider: "EDUCBA" },
  ]},
  { code: "MLS", name: "Medical Laboratory Science", skills: [
    { skill: "Laboratory Information Systems", course: "Health Informatics Specialization", url: "https://www.coursera.org/specializations/health-informatics", provider: "Johns Hopkins" },
    { skill: "Digital Microscopy / Biomedical Informatics", course: "AI for Medical Diagnosis", url: "https://www.coursera.org/learn/ai-for-medical-diagnosis", provider: "deeplearning.ai" },
  ]},
  { code: "MME", name: "Metallurgical & Materials Engineering", skills: [
    { skill: "AutoCAD / SolidWorks", course: "Master AutoCAD 3D: Create, Model & Transform Designs", url: "https://www.coursera.org/learn/master-autocad-3d-create-model-transform-designs", provider: "EDUCBA" },
    { skill: "MATLAB / Python", course: "Introduction to Programming with MATLAB", url: "https://www.coursera.org/learn/matlab", provider: "Vanderbilt" },
    { skill: "Data Analysis", course: "Data Analysis with Python", url: "https://www.coursera.org/learn/data-analysis-with-python", provider: "IBM" },
    { skill: "3D Printing / Additive Manufacturing", course: "Intro to 3D Printing & Additive Manufacturing", url: "https://www.coursera.org/learn/3d-printing-software", provider: "Uni. of Illinois" },
  ]},
  { code: "MNE", name: "Mining Engineering", skills: [
    { skill: "GIS (MineSight, Surpac)", course: "Fundamentals of GIS", url: "https://www.coursera.org/learn/gis", provider: "UC Davis" },
    { skill: "Machine Learning & AI", course: "Machine Learning Specialization", url: "https://www.coursera.org/specializations/machine-learning-introduction", provider: "Stanford / DeepLearning.ai" },
    { skill: "Automation & Robotics", course: "Robotics Specialization", url: "https://www.coursera.org/specializations/modernrobotics", provider: "Uni. of Pennsylvania" },
  ]},
  { code: "MST", name: "Marine Science & Technology", skills: [
    { skill: "MATLAB / R / Python", course: "Introduction to Programming with MATLAB", url: "https://www.coursera.org/learn/matlab", provider: "Vanderbilt" },
    { skill: "GIS & Remote Sensing", course: "Fundamentals of GIS", url: "https://www.coursera.org/learn/gis", provider: "UC Davis" },
    { skill: "Ocean / Environmental Modelling", course: "Climate Change & Health: Science to Action", url: "https://www.coursera.org/learn/climate-change-health-science-to-action", provider: "Yale" },
  ]},
  { code: "MTS", name: "Mathematics", skills: [
    { skill: "MATLAB / R / Python / NumPy", course: "Introduction to Programming with MATLAB", url: "https://www.coursera.org/learn/matlab", provider: "Vanderbilt" },
    { skill: "Statistical Analysis Software", course: "Statistics with Python Specialization", url: "https://www.coursera.org/specializations/statistics-with-python", provider: "Uni. of Michigan" },
    { skill: "Computer Algebra Systems", course: "Mathematics for Machine Learning", url: "https://www.coursera.org/specializations/mathematics-machine-learning", provider: "Imperial College London" },
  ]},
  { code: "NDT", name: "Nutrition & Dietetics", skills: [
    { skill: "Nutrient / Recipe Analysis Software", course: "Child Nutrition and Cooking", url: "https://www.coursera.org/learn/childnutrition", provider: "Stanford" },
    { skill: "Dietary Assessment Tools", course: "Stanford Introduction to Food and Health", url: "https://www.coursera.org/learn/food-and-health", provider: "Stanford" },
  ]},
  { code: "PHS", name: "Plant Health Science", skills: [
    { skill: "Bioinformatics (BLAST, NCBI)", course: "Bioinformatics Specialization", url: "https://www.coursera.org/specializations/bioinformatics", provider: "UC San Diego" },
    { skill: "MATLAB / SimBio", course: "Introduction to Programming with MATLAB", url: "https://www.coursera.org/learn/matlab", provider: "Vanderbilt" },
  ]},
  { code: "PHY", name: "Physics", skills: [
    { skill: "Data Science", course: "IBM Data Science Professional Certificate", url: "https://www.coursera.org/professional-certificates/ibm-data-science", provider: "IBM" },
    { skill: "Software Engineering", course: "Introduction to Software Engineering", url: "https://www.coursera.org/learn/introduction-to-software-engineering", provider: "UBC" },
    { skill: "Embedded Systems", course: "Programming the IoT Specialization", url: "https://www.coursera.org/specializations/iot", provider: "UC Irvine" },
    { skill: "Telecommunications", course: "Wireless Communications for Everybody", url: "https://www.coursera.org/learn/wireless-communications", provider: "Yonsei University" },
  ]},
  { code: "PMT", name: "Project Management Technology", skills: [
    { skill: "Workflow Automation (Zapier, Power Automate)", course: "Power BI & Platform Specialization", url: "https://www.coursera.org/specializations/microsoft-power-bi-and-power-platform-for-productivity", provider: "Microsoft" },
    { skill: "Microsoft Power BI", course: "Data Analysis and Visualization with Power BI", url: "https://www.coursera.org/learn/data-analysis-and-visualization-with-power-bi", provider: "Microsoft" },
  ]},
  { code: "QSV", name: "Quantity Surveying", skills: [
    { skill: "AutoCAD / PlanSwift", course: "Master AutoCAD 3D: Create, Model & Transform Designs", url: "https://www.coursera.org/learn/master-autocad-3d-create-model-transform-designs", provider: "EDUCBA" },
    { skill: "Excel", course: "Excel Skills for Business Specialization", url: "https://www.coursera.org/specializations/excel", provider: "Macquarie University" },
  ]},
  { code: "RSG", name: "Remote Sensing & GIS", skills: [
    { skill: "ArcGIS / ENVI", course: "Fundamentals of GIS", url: "https://www.coursera.org/learn/gis", provider: "UC Davis" },
    { skill: "Remote Sensing Software (SNAP)", course: "Spatial Analysis & Satellite Imagery in a GIS", url: "https://www.coursera.org/learn/spatial-analysis-satellite-imagery-in-a-gis", provider: "Esri" },
    { skill: "Geospatial Data & GPS", course: "Geospatial and Environmental Analysis", url: "https://www.coursera.org/learn/spatial-analysis", provider: "UC Davis" },
  ]},
  { code: "SEN", name: "Software Engineering", skills: [
    { skill: "IDEs & Programming", course: "Python for Everybody", url: "https://www.coursera.org/learn/python", provider: "Uni. of Michigan" },
    { skill: "Project Management (Jira)", course: "Agile with Atlassian Jira", url: "https://www.coursera.org/learn/agile-atlassian-jira", provider: "Atlassian" },
    { skill: "Code Review / Issue Tracking", course: "Introduction to Git and GitHub", url: "https://www.coursera.org/learn/introduction-git-github", provider: "Google" },
  ]},
  { code: "SIMT", name: "Science & IT Management", skills: [
    { skill: "Financial Data Analysis", course: "Financial Markets", url: "https://www.coursera.org/learn/financial-markets-global", provider: "Yale" },
    { skill: "Portfolio Management Software", course: "Investment Management Specialization", url: "https://www.coursera.org/specializations/investment-management", provider: "Uni. of Geneva" },
    { skill: "Blockchain & Crypto Platforms", course: "Blockchain Basics", url: "https://www.coursera.org/learn/blockchain-basics", provider: "Uni. at Buffalo" },
  ]},
  { code: "STAT", name: "Statistics", skills: [
    { skill: "Power BI", course: "Data Analysis & Visualization with Power BI", url: "https://www.coursera.org/professional-certificates/microsoft-power-bi-data-analyst", provider: "Microsoft" },
    { skill: "Python / R", course: "Statistics with Python Specialization", url: "https://www.coursera.org/specializations/statistics-with-python", provider: "Uni. of Michigan" },
    { skill: "SQL", course: "Databases and SQL for Data Science", url: "https://www.coursera.org/learn/sql-data-science", provider: "IBM" },
    { skill: "Data Science", course: "IBM Data Science Professional Certificate", url: "https://www.coursera.org/professional-certificates/ibm-data-science", provider: "IBM" },
  ]},
  { code: "SVG", name: "Surveying & Geoinformatics", skills: [
    { skill: "ArcGIS / Google Earth Engine", course: "Fundamentals of GIS", url: "https://www.coursera.org/learn/gis", provider: "UC Davis" },
    { skill: "AutoCAD / MicroStation", course: "Master AutoCAD 3D: Create, Model & Transform Designs", url: "https://www.coursera.org/learn/master-autocad-3d-create-model-transform-designs", provider: "EDUCBA" },
    { skill: "Geodetic Calculation", course: "Geospatial and Environmental Analysis", url: "https://www.coursera.org/learn/spatial-analysis", provider: "UC Davis" },
  ]},
  { code: "URP", name: "Urban & Regional Planning", skills: [
    { skill: "AutoCAD", course: "Master AutoCAD 3D: Create, Model & Transform Designs", url: "https://www.coursera.org/learn/master-autocad-3d-create-model-transform-designs", provider: "EDUCBA" },
    { skill: "GIS Map Reading", course: "Fundamentals of GIS", url: "https://www.coursera.org/learn/gis", provider: "UC Davis" },
    { skill: "Data Analysis", course: "Data Analysis with Python", url: "https://www.coursera.org/learn/data-analysis-with-python", provider: "IBM" },
  ]},
];

// Green palette
const G = {
  dark:    "#0d3320",
  mid:     "#145a30",
  main:    "#1e7a42",
  light:   "#2ea85a",
  pale:    "#d4edda",
  paler:   "#f0faf3",
  accent:  "#27ae60",
  border:  "#a8d5b5",
  text:    "#0a2417",
  muted:   "#4a7c5e",
  white:   "#ffffff",
};

export default function App() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      return params.get("dept") || null;
    }
    return null;
  });

  useEffect(() => {
    const handlePopState = (e) => {
      setSelected(e.state?.dept || null);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const changeSelection = (code) => {
    if (code === selected) code = null;
    if (code !== selected) {
      window.history.pushState({ dept: code }, "", code ? `?dept=${code}` : window.location.pathname);
      setSelected(code);
    }
  };

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return data.filter(d =>
      d.code.toLowerCase().includes(q) ||
      d.name.toLowerCase().includes(q) ||
      d.skills.some(s =>
        s.skill.toLowerCase().includes(q) ||
        s.course.toLowerCase().includes(q) ||
        s.provider.toLowerCase().includes(q)
      )
    );
  }, [search]);

  const dept = selected ? data.find(d => d.code === selected) : null;

  return (
    <div style={{ minHeight: "100vh", background: G.paler, fontFamily: "'Segoe UI', system-ui, sans-serif", color: G.text }}>
      <style>{`
        .mobile-back-btn { display: none; }
        @media (max-width: 768px) {
          .responsive-container { flex-direction: column !important; }
          .responsive-sidebar { width: 100% !important; min-width: 100% !important; max-height: none !important; border-right: none !important; }
          .responsive-sidebar.has-selection { display: none !important; }
          .responsive-detail { border-left: none !important; border-top: none !important; padding: 16px 12px !important; }
          .mobile-back-btn { display: inline-flex; align-items: center; gap: 6px; background: ${G.white}; color: ${G.main}; border: 1.5px solid ${G.border}; padding: 8px 14px; border-radius: 8px; font-weight: 600; font-size: 14px; margin-bottom: 20px; cursor: pointer; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
        }
      `}</style>

      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, ${G.dark} 0%, ${G.mid} 60%, ${G.main} 100%)`,
        padding: "24px 20px 20px",
        borderBottom: `3px solid ${G.light}`,
      }}>
        {/* Logo row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 14 }}>
          <TacsionLogo size={38} />
          <div style={{
            width: 1,
            height: 36,
            background: "rgba(255,255,255,0.25)",
          }} />
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", letterSpacing: 2, textTransform: "uppercase" }}>FUTA Chapter</div>
            <div style={{ fontSize: 13, color: G.pale, fontWeight: 600 }}>TBN 2026</div>
          </div>
        </div>

        <h1 style={{
          margin: "0 0 4px",
          textAlign: "center",
          fontSize: "clamp(17px, 3.5vw, 26px)",
          fontWeight: 800,
          color: G.white,
          letterSpacing: -0.3,
        }}>
          Digital Skills → Free Coursera Courses
        </h1>
        <p style={{ margin: "0 0 16px", textAlign: "center", color: "rgba(255,255,255,0.65)", fontSize: 13 }}>
          Every FUTA department mapped to a free course you can start today
        </p>

        {/* Search */}
        <div style={{ maxWidth: 500, margin: "0 auto", position: "relative" }}>
          <input
            value={search}
            onChange={e => { setSearch(e.target.value); changeSelection(null); }}
            placeholder="Search dept, skill, course or provider…"
            style={{
              width: "100%",
              padding: "11px 16px 11px 42px",
              borderRadius: 10,
              border: `1.5px solid ${G.light}`,
              background: "rgba(255,255,255,0.12)",
              color: G.white,
              fontSize: 14,
              outline: "none",
              boxSizing: "border-box",
              backdropFilter: "blur(6px)",
            }}
          />
          <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: 16, color: G.pale }}>⌕</span>
        </div>
      </div>

      <div className="responsive-container" style={{ display: "flex", maxWidth: 1080, margin: "0 auto" }}>

        {/* Dept grid / sidebar */}
        <div className={`responsive-sidebar ${dept ? 'has-selection' : ''}`} style={{
          width: dept ? 220 : "100%",
          minWidth: dept ? 220 : undefined,
          padding: "16px 14px",
          overflowY: "auto",
          maxHeight: "calc(100vh - 200px)",
          transition: "width 0.25s ease",
        }}>
          {!dept && (
            <div style={{ fontSize: 11, color: G.muted, marginBottom: 10, letterSpacing: 1, textTransform: "uppercase" }}>
              {filtered.length} Departments
            </div>
          )}
          <div style={{
            display: dept ? "flex" : "grid",
            flexDirection: dept ? "column" : undefined,
            gridTemplateColumns: !dept ? "repeat(auto-fill, minmax(190px, 1fr))" : undefined,
            gap: 8,
          }}>
            {filtered.map(d => (
              <button
                key={d.code}
                onClick={() => changeSelection(d.code)}
                style={{
                  background: selected === d.code ? G.main : G.white,
                  border: `1.5px solid ${selected === d.code ? G.main : G.border}`,
                  borderRadius: 10,
                  padding: "10px 12px",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.18s",
                  color: selected === d.code ? G.white : G.text,
                  boxShadow: selected === d.code ? `0 2px 12px ${G.accent}44` : "0 1px 3px rgba(0,0,0,0.06)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{
                    background: selected === d.code ? "rgba(255,255,255,0.22)" : G.pale,
                    color: selected === d.code ? G.white : G.main,
                    borderRadius: 6,
                    padding: "2px 7px",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: 0.5,
                    whiteSpace: "nowrap",
                  }}>{d.code}</span>
                  <span style={{ fontSize: 12.5, lineHeight: 1.3, color: selected === d.code ? "rgba(255,255,255,0.9)" : G.muted }}>
                    {d.name}
                  </span>
                </div>
                {!dept && (
                  <div style={{ marginTop: 5, fontSize: 11, color: selected === d.code ? "rgba(255,255,255,0.6)" : G.border }}>
                    {d.skills.length} skill{d.skills.length !== 1 ? "s" : ""}
                  </div>
                )}
              </button>
            ))}
          </div>
          {filtered.length === 0 && (
            <div style={{ textAlign: "center", color: G.muted, marginTop: 40, fontSize: 14 }}>
              No results for "{search}"
            </div>
          )}
        </div>

        {/* Detail panel */}
        {dept && (
          <div className="responsive-detail" style={{
            flex: 1,
            padding: "20px 16px",
            borderLeft: `2px solid ${G.pale}`,
            overflowY: "auto",
            maxHeight: "calc(100vh - 200px)",
          }}>
            {/* Mobile Back Button */}
            <button 
              className="mobile-back-btn" 
              onClick={() => changeSelection(null)}
            >
              <span style={{ fontSize: 16 }}>←</span> Back to Departments
            </button>

            {/* Dept header */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <span style={{
                background: G.main,
                color: G.white,
                borderRadius: 8,
                padding: "4px 13px",
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: 1,
              }}>{dept.code}</span>
              <div>
                <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: G.dark }}>{dept.name}</h2>
                <p style={{ margin: "2px 0 0", color: G.muted, fontSize: 12 }}>
                  {dept.skills.length} skills · free to audit on Coursera
                </p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {dept.skills.map((s, i) => (
                <div key={i} style={{
                  background: G.white,
                  border: `1.5px solid ${G.border}`,
                  borderRadius: 12,
                  padding: "14px 16px",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
                    <div>
                      <div style={{ fontSize: 10, color: G.muted, textTransform: "uppercase", letterSpacing: 1, marginBottom: 3 }}>Skill</div>
                      <div style={{ fontSize: 14.5, fontWeight: 600, color: G.dark }}>{s.skill}</div>
                    </div>
                    <span style={{
                      background: G.pale,
                      color: G.main,
                      border: `1px solid ${G.border}`,
                      borderRadius: 6,
                      padding: "3px 10px",
                      fontSize: 11,
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                      alignSelf: "flex-start",
                    }}>{s.provider}</span>
                  </div>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background: `linear-gradient(90deg, ${G.mid}, ${G.main})`,
                      color: G.white,
                      padding: "9px 14px",
                      borderRadius: 8,
                      textDecoration: "none",
                      fontSize: 13.5,
                      fontWeight: 500,
                      width: "100%",
                      boxSizing: "border-box",
                    }}
                  >
                    <span>🎓</span>
                    <span style={{ flex: 1 }}>{s.course}</span>
                    <span style={{ opacity: 0.7, fontSize: 12 }}>↗</span>
                  </a>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: 16,
              padding: "10px 14px",
              background: G.pale,
              border: `1px solid ${G.border}`,
              borderRadius: 10,
              fontSize: 12,
              color: G.muted,
            }}>
              💡 Audit any Coursera course for free. Only pay if you need the certificate.
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{
        textAlign: "center",
        padding: "14px 20px",
        fontSize: 11,
        color: G.muted,
        borderTop: `1px solid ${G.border}`,
        marginTop: 8,
        background: G.white,
      }}>
        tacsfon FUTA Chapter · Digital Skills Guide · Courses subject to Coursera availability
      </div>
    </div>
  );
}
