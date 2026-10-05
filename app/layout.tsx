import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '公考知库｜公考全科知识检索',
  description: '覆盖31,648条成语、政治理论、法律、行测与申论，并支持按日期和知识点检索个人复盘卡。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
