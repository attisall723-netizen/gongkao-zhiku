import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '公考知库｜公考全科知识检索',
  description: '覆盖31,648条成语、十五五政治理论、高频法律及行测六大模块的结构化知识检索地图。',
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
