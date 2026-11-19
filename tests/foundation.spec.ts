import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
test('independent destinations and direct writing route return home',async({page})=>{
 await page.goto('/');
 for(const [label,path] of [['Discover your PowerSkills & build your résumé','/resume/start'],['Go straight to my résumé','/resume/edit'],['Check your documents','/documents'],['Discover what you need to know','/learn']]){
  await page.getByRole('main').getByRole('link',{name:label,exact:false}).click();
  await expect(page).toHaveURL(new RegExp(path+'$'));
  await expect(page.getByText('This tool is not available yet.',{exact:false})).toBeVisible();
  await page.getByRole('link',{name:'Return to my next steps'}).click();
  await expect(page.getByRole('heading',{level:1})).toHaveText('Your experience has a place to grow.');
 }
 expect(await page.evaluate(()=>({local:localStorage.length,session:sessionStorage.length}))).toEqual({local:0,session:0});
});
test('accessible home, keyboard skip and responsive surfaces',async({page})=>{
 await page.goto('/');
 await page.keyboard.press('Tab');
 await expect(page.getByRole('link',{name:'Skip to main content'})).toBeFocused();
 await page.keyboard.press('Enter');
 await expect(page.getByRole('main')).toBeFocused();
 expect((await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze()).violations).toEqual([]);
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await page.getByText('How will saving my work work?',{exact:true}).click();
 await expect(page.getByText('This foundation preview does not collect or save résumé information.')).toBeVisible();
 await page.evaluate(()=>document.documentElement.style.fontSize='200%');
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
