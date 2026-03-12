name: Deploy to AWS S3

on:
  push:
    branches:
      - main
      - master

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      # 1️⃣ Checkout repository
      - name: Checkout code
        uses: actions/checkout@v3

      # 2️⃣ Setup Node
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 18

      # 3️⃣ Install dependencies
      - name: Install dependencies
        run: npm install

      # 4️⃣ Fix Vite permissions (CI issue fix)
      - name: Fix vite permissions
        run: chmod +x node_modules/.bin/vite

      # 5️⃣ Build the project
      - name: Build project
        run: npm run build

      # 6️⃣ Deploy build files to S3
      - name: Deploy to S3
        uses: jakejarvis/s3-sync-action@master
        with:
          args: --delete
        env:
          AWS_S3_BUCKET: sarkartech.in
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_KEY }}
          AWS_REGION: ap-south-1
          SOURCE_DIR: ./dist

      # 7️⃣ Invalidate CloudFront cache automatically
      - name: Invalidate CloudFront
        uses: chetan/invalidate-cloudfront-action@v2
        env:
          DISTRIBUTION: E1RLCH1R4QYPEL
          PATHS: "/*"
          AWS_REGION: ap-south-1
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_KEY }}