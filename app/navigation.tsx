'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const links = [['/', 'My next steps'], ['/resume/start', 'Build my résumé'], ['/documents', 'Check my documents'], ['/learn', 'Transparent Hiring Information']];
export function Navigation() {
 const path = usePathname();
 return <nav aria-label="Main navigation">{links.map(([href, label]) => <Link key={href} href={href} aria-current={(href === '/' ? path === '/' : path.startsWith(href.split('/').slice(0,2).join('/'))) ? 'page' : undefined}>{label}</Link>)}</nav>;
}
