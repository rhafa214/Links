import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// High-fidelity vector representation matching the uploaded official Missão Sedentos emblem
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <defs>
    <style>
      .gold-fill { fill: #D9BB72; }
      .gold-main { fill: #CAA04B; }
      .gold-light { fill: #E5C880; }
      .sedentos-text {
        font-family: 'Arial Black', 'Montserrat', 'Oswald', -apple-system, sans-serif;
        font-weight: 900;
        font-size: 88px;
        letter-spacing: 0.08em;
        text-anchor: middle;
        fill: #CAA04B;
      }
    </style>
  </defs>

  <g id="official-logo" transform="translate(0, 20)">
    <!-- CROWN -->
    <path class="gold-main" d="
      M 345 240
      C 355 238 375 235 400 232
      C 425 229 460 227 500 227
      C 540 227 575 229 600 232
      C 625 235 645 238 655 240
      L 650 255
      C 638 253 620 250 595 247
      C 565 244 532 242 500 242
      C 468 242 435 244 405 247
      C 380 250 362 253 350 255
      Z
    "/>

    <path class="gold-main" d="
      M 340 225
      L 295 155
      C 305 145 320 152 320 162
      L 355 195
      L 410 135
      C 420 125 435 132 435 142
      L 460 185
      L 500 55
      C 490 55 482 62 482 72
      C 482 82 492 90 500 90
      C 508 90 518 82 518 72
      C 518 62 510 55 500 55
      L 540 185
      L 565 142
      C 565 132 580 125 590 135
      L 645 195
      L 680 162
      C 680 152 695 145 705 155
      L 660 225
      C 630 216 570 208 500 208
      C 430 208 370 216 340 225
      Z
      M 500 115
      C 488 115 478 125 478 138
      C 478 150 488 160 500 160
      C 512 160 522 150 522 138
      C 522 125 512 115 500 115
      Z
    "/>

    <!-- LION HEAD -->
    <!-- Mane Top/Left Flow -->
    <path class="gold-main" d="
      M 480 255
      C 440 260 380 280 340 330
      C 315 360 290 405 285 455
      C 275 425 280 385 305 345
      C 335 295 385 265 440 255
      Z
      M 440 290
      C 390 320 350 375 340 445
      C 330 515 350 575 385 625
      C 365 585 350 535 355 475
      C 362 420 395 365 440 320
      Z
      M 480 340
      C 445 385 430 450 440 525
      C 450 605 480 675 515 745
      C 530 780 545 810 560 835
      C 545 805 525 765 505 715
      C 475 640 455 570 450 500
      C 445 440 460 390 495 350
      Z
      M 545 540
      C 555 625 580 710 610 790
      C 625 825 645 855 660 880
      C 640 850 615 810 590 755
      C 560 685 540 615 535 545
      Z
      M 420 500
      C 430 570 455 645 485 715
      C 500 750 520 785 535 815
      C 515 785 490 745 470 695
      C 445 635 430 575 425 515
      Z
    "/>

    <!-- Lion Face / Snout / Jaws / Crown Base & Eye -->
    <path class="gold-main" d="
      M 490 260
      C 535 260 575 280 605 315
      C 620 332 630 352 635 368
      C 625 360 610 355 595 360
      C 580 365 570 378 570 392
      C 570 410 585 425 605 425
      C 620 425 635 415 640 400
      C 648 412 658 420 670 424
      C 690 430 710 420 720 405
      C 715 425 700 440 685 450
      C 670 460 655 465 640 472
      C 660 480 685 485 710 475
      C 725 468 738 455 745 440
      C 740 460 728 480 710 495
      C 690 512 665 520 642 522
      C 655 530 672 535 690 532
      C 705 530 718 522 725 512
      C 715 530 695 545 675 550
      C 655 555 635 550 620 540
      C 605 530 595 515 588 498
      C 575 470 560 445 540 425
      C 515 400 485 385 450 380
      Z
    "/>

    <!-- Sedentos Wordmark Below -->
    <text x="500" y="930" class="sedentos-text">SEDENTOS</text>
  </g>
</svg>
`;

async function main() {
  const publicDir = path.resolve('public/assets');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const outputPath = path.join(publicDir, 'logo-missao-sedentos.png');

  console.log('Writing high quality transparent PNG logo to', outputPath);

  await sharp(Buffer.from(svg))
    .resize(900, 900, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(outputPath);

  console.log('Logo generated successfully at', outputPath);
}

main().catch(console.error);
