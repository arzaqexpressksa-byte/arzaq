import os
from PIL import Image

uploaded_dir = r"C:\Users\ASUS\.gemini\antigravity-ide\brain\3604dc8a-18b1-4190-88d3-ffaaa209818b\.user_uploaded"
out_dir = r"c:\codeplayground\arzaq\arzaq-elite-web\src\assets\scaffolding"
public_out_dir = r"c:\codeplayground\arzaq\arzaq-elite-web\public\scaffolding"

os.makedirs(out_dir, exist_ok=True)
os.makedirs(public_out_dir, exist_ok=True)

# Image files mapping
# Page 1: media_1787230822282.jpg (Aluminium Mobile Tower, Cuplock Mobile Tower - Single)
# Page 2: media_1787230822356.jpg (Steel Ladder, Beam Ladder, Aluminium Ladder)
# Page 3: media_1787230822386.jpg (Thick Steel Board, LVL OSHA Board, Heavy duty Caster Wheel)
# Page 4: media_1787230822412.jpg (Cuplock Mobile Tower - Double, Coupler EN74, Scaffolding tube)

img1 = Image.open(os.path.join(uploaded_dir, "media_1787230822282.jpg"))
w1, h1 = img1.size

img2 = Image.open(os.path.join(uploaded_dir, "media_1787230822356.jpg"))
w2, h2 = img2.size

img3 = Image.open(os.path.join(uploaded_dir, "media_1787230822386.jpg"))
w3, h3 = img3.size

img4 = Image.open(os.path.join(uploaded_dir, "media_1787230822412.jpg"))
w4, h4 = img4.size

# Crops in normalized percentages (left, top, right, bottom)
crops = {
    "aluminium-mobile-tower.jpg": (img1, (0.50, 0.03, 0.95, 0.44)),
    "cuplock-mobile-tower-single.jpg": (img1, (0.43, 0.46, 0.95, 0.94)),
    "steel-ladder.jpg": (img2, (0.55, 0.04, 0.95, 0.30)),
    "beam-ladder.jpg": (img2, (0.50, 0.31, 0.95, 0.58)),
    "aluminium-ladder.jpg": (img2, (0.52, 0.60, 0.95, 0.96)),
    "thick-steel-board.jpg": (img3, (0.45, 0.06, 0.95, 0.28)),
    "lvl-osha-board.jpg": (img3, (0.45, 0.33, 0.95, 0.57)),
    "caster-wheel.jpg": (img3, (0.45, 0.66, 0.95, 0.92)),
    "cuplock-mobile-tower-double.jpg": (img4, (0.52, 0.02, 0.97, 0.43)),
    "coupler-en74.jpg": (img4, (0.50, 0.44, 0.95, 0.66)),
    "scaffolding-tube.jpg": (img4, (0.50, 0.68, 0.95, 0.95)),
}

for name, (img, norm_box) in crops.items():
    w, h = img.size
    box = (
        int(norm_box[0] * w),
        int(norm_box[1] * h),
        int(norm_box[2] * w),
        int(norm_box[3] * h)
    )
    cropped = img.crop(box)
    
    # Save to src/assets/scaffolding
    cropped.save(os.path.join(out_dir, name), quality=95)
    # Save to public/scaffolding
    cropped.save(os.path.join(public_out_dir, name), quality=95)
    print(f"Saved {name} -> {box}")

print("Cropping completed successfully!")
