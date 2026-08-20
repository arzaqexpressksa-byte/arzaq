import os
import fitz  # PyMuPDF
from PIL import Image

pdf_path = r"C:\Users\ASUS\.gemini\antigravity-ide\brain\3604dc8a-18b1-4190-88d3-ffaaa209818b\.user_uploaded\media_1787234449899.pdf"
out_dir = r"c:\codeplayground\arzaq\arzaq-elite-web\src\assets\equipment"
public_out_dir = r"c:\codeplayground\arzaq\arzaq-elite-web\public\equipment"

os.makedirs(out_dir, exist_ok=True)
os.makedirs(public_out_dir, exist_ok=True)

doc = fitz.open(pdf_path)
print(f"Opened PDF with {len(doc)} pages")

# Equipment items per page (top item, bottom item)
equipment_items = [
    # Page 0 (Page 1 in PDF)
    ("asphalt-paver.jpg", 0, (0.05, 0.25, 0.95, 0.58)),
    ("boom-truck.jpg", 0, (0.05, 0.63, 0.95, 0.93)),
    # Page 1 (Page 2 in PDF)
    ("concrete-mixer.jpg", 1, (0.05, 0.15, 0.95, 0.48)),
    ("crane.jpg", 1, (0.05, 0.52, 0.95, 0.93)),
    # Page 2 (Page 3 in PDF)
    ("dump-truck.jpg", 2, (0.05, 0.15, 0.95, 0.48)),
    ("excavator.jpg", 2, (0.05, 0.52, 0.95, 0.93)),
    # Page 3 (Page 4 in PDF)
    ("forklift.jpg", 3, (0.05, 0.15, 0.95, 0.48)),
    ("jackhammer-loader.jpg", 3, (0.05, 0.52, 0.95, 0.93)),
    # Page 4 (Page 5 in PDF)
    ("jcb-backhoe.jpg", 4, (0.05, 0.15, 0.95, 0.44)),
    ("manlift.jpg", 4, (0.05, 0.48, 0.95, 0.93)),
    # Page 5 (Page 6 in PDF)
    ("road-roller.jpg", 5, (0.05, 0.15, 0.95, 0.44)),
    ("scissor-lift.jpg", 5, (0.05, 0.48, 0.95, 0.93)),
    # Page 6 (Page 7 in PDF)
    ("telehandler.jpg", 6, (0.05, 0.15, 0.95, 0.52)),
    ("water-tanker.jpg", 6, (0.05, 0.56, 0.95, 0.93)),
    # Page 7 (Page 8 in PDF)
    ("wheel-loader.jpg", 7, (0.05, 0.15, 0.95, 0.52)),
    ("angle-grinder.jpg", 7, (0.05, 0.56, 0.95, 0.93)),
    # Page 8 (Page 9 in PDF)
    ("drill-machine.jpg", 8, (0.05, 0.15, 0.95, 0.45)),
    ("jack-hammer-pneumatic.jpg", 8, (0.05, 0.48, 0.95, 0.93)),
    # Page 9 (Page 10 in PDF)
    ("plate-compactor.jpg", 9, (0.05, 0.15, 0.95, 0.48)),
    ("jumping-jack-compactor.jpg", 9, (0.05, 0.52, 0.95, 0.93)),
]

for filename, page_idx, norm_box in equipment_items:
    page = doc[page_idx]
    pix = page.get_pixmap(dpi=200)
    img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
    
    w, h = img.size
    box = (
        int(norm_box[0] * w),
        int(norm_box[1] * h),
        int(norm_box[2] * w),
        int(norm_box[3] * h)
    )
    cropped = img.crop(box)
    
    # Save to src/assets/equipment and public/equipment
    cropped.save(os.path.join(out_dir, filename), quality=95)
    cropped.save(os.path.join(public_out_dir, filename), quality=95)
    print(f"Extracted {filename} from Page {page_idx + 1}")

print("All 20 heavy equipment photos extracted successfully!")
