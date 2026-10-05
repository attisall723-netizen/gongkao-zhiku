import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '行测知图｜行测全科知识检索',
  description: '覆盖政治理论、常识判断、言语理解、数量关系、判断推理与资料分析的结构化行测知识地图。',
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
