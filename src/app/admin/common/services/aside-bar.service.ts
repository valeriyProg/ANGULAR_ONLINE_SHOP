import { Injectable } from '@angular/core';
import AsideMenuItemModel from "../models/aside-menu.model";

@Injectable()
export class AsideBarService {
  asideMenu: AsideMenuItemModel[] = [
    { id: 0,
      title: 'Dashboard', link: '/admin/dashboard',
      icon: {
        path: 'M208 448V320h96v128h97.6V256H464L256 64 48 256h62.4v192z',
        viewBox: '0 0 512 512'
      },
      submenu: null },
    { id: 1,
      title: 'Components', link: null,
      icon: {
        path: 'M299.3 376c6.2-14.1 20.3-24 36.7-24s30.5 9.9 36.7 24H448c8.8 0 16 7.2 16 16s-7.2 16-16 16h-75.3c-6.2 14.1-20.3 24-36.7 24s-30.5-9.9-36.7-24H64c-8.8 0-16-7.2-16-16s7.2-16 16-16h235.3zM139.3 240c6.2-14.1 20.3-24 36.7-24s30.5 9.9 36.7 24H448c8.8 0 16 7.2 16 16s-7.2 16-16 16H212.7c-6.2 14.1-20.3 24-36.7 24s-30.5-9.9-36.7-24H64c-8.8 0-16-7.2-16-16s7.2-16 16-16h75.3zM299.3 104c6.2-14.1 20.3-24 36.7-24s30.5 9.9 36.7 24H448c8.8 0 16 7.2 16 16s-7.2 16-16 16h-75.3c-6.2 14.1-20.3 24-36.7 24s-30.5-9.9-36.7-24H64c-8.8 0-16-7.2-16-16s7.2-16 16-16h235.3z',
        viewBox: '0 0 512 512'
      },
      submenu: [
        {title: 'Menu', link: '/admin/components/menu-editor'},
        {title: 'Edit Component', link: '/admin/components/product-editor'},
        {title: 'Add Component', link: '/admin/components/product-add'},
      ] },
    { id: 2,
      title: 'Order List', link: '/admin/order-list',
      icon: {
        viewBox:  '0 0 512 512',
        path: 'M168.531 215.469l-29.864 29.864 96 96L448 128l-29.864-29.864-183.469 182.395-66.136-65.062zm236.802 189.864H106.667V106.667H320V64H106.667C83.198 64 64 83.198 64 106.667v298.666C64 428.802 83.198 448 106.667 448h298.666C428.802 448 448 428.802 448 405.333V234.667h-42.667v170.666z',
      },
      submenu: null },
    { id: 3,
      title: 'Pages', link: null,
      icon: {
        viewBox:  '0 0 512 512',
        path: 'M296 48H176.5C154.4 48 136 65.4 136 87.5V96h-7.5C106.4 96 88 113.4 88 135.5v288c0 22.1 18.4 40.5 40.5 40.5h208c22.1 0 39.5-18.4 39.5-40.5V416h8.5c22.1 0 39.5-18.4 39.5-40.5V176L296 48zm0 44.6l83.4 83.4H296V92.6zm48 330.9c0 4.7-3.4 8.5-7.5 8.5h-208c-4.4 0-8.5-4.1-8.5-8.5v-288c0-4.1 3.8-7.5 8.5-7.5h7.5v255.5c0 22.1 10.4 32.5 32.5 32.5H344v7.5zm48-48c0 4.7-3.4 8.5-7.5 8.5h-208c-4.4 0-8.5-4.1-8.5-8.5v-288c0-4.1 3.8-7.5 8.5-7.5H264v128h128v167.5z',
      },
      submenu: null },
  ];
  currentSelected = 0;
  displayedSubMenu: HTMLElement;
  collapseMenu = false;

  constructor() { }

  toggleList(e: Event): void {
    // TODO: REFACTORING THIS IN FUTURE (SPLIT THIS FUNCTIONAL)
    e.preventDefault();
    const target = e.target as HTMLElement;

    if (target.tagName !== 'a' && target.tagName !== 'A') {
      return;
    }
    if (this.collapseMenu) {
      this.collapseMenu = false;
    }

    const subList = target.nextElementSibling;
    this.displayedSubMenu = subList as HTMLElement;
    const linkControl = target.querySelector('.angle-control');

    if (subList.classList.contains('sub-list-show')) {
      linkControl.classList.remove('angle-control-rotated');
      subList.classList.remove('sub-list-show');
      return;
    }

    linkControl.classList.add('angle-control-rotated');
    subList.classList.add('sub-list-show');
  }

  toggleLink(e: Event, id: number): void {
    e.preventDefault();
    const target = e.target as HTMLElement;

    if (this.collapseMenu) {
      this.collapseMenu = false;
    }

    if (target.classList.contains('selected')) {
      return;
    }

    this.currentSelected = id;
    target.classList.add('selected');
  }

  collapseMenuToggle() {
    if (this.collapseMenu) {
      this.collapseMenu = false;

      if (this.displayedSubMenu) {
        this.displayedSubMenu.classList.add('sub-list-show');
      }

      return;
    }

    if (this.displayedSubMenu) {
      this.displayedSubMenu.classList.remove('sub-list-show');
    }

    this.collapseMenu = true;
  }
}
