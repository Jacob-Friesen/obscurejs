'use strict';

const menu = [
  { name: 'Home', hidden: false, subMenus: ['Dashboard', 'Analytics'] },
  { name: 'Accounts', hidden: false, subMenus: ['Grid', 'Analytics'] },
  { name: 'Admin', hidden: true, subMenus: ['Dashboard', 'Config'] },
];

for (let item of menu) {
  if (item.hidden === true) {
    item.subMenus.splice(0);
  }
}

console.log(menu);
// [
//   { name: 'Home', hidden: false, subMenus: ['Dashboard', 'Analytics'] },
//   { name: 'Accounts', hidden: false, subMenus: ['Grid', 'Analytics'] },
//   { name: 'Admin', hidden: true, subMenus: [] },
// ]