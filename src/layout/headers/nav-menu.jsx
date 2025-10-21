import Link from "next/link";
import React from "react";
import menu_data from "./menu-data";

const NavMenu = () => {
  return (
    <>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, gap: '2px', justifyContent: 'center' }}>
        {menu_data.map((menu_item, i) => (
          <li key={i} style={{ position: 'relative' }}>
            <Link href={menu_item.link}>
              <span style={{ textDecoration: 'none', color: '#000', fontWeight: 500, fontSize: '14px', padding: '0', display: 'inline-block', cursor: 'pointer' }}>
                {menu_item.title}
              </span>
            </Link>
            {menu_item.has_dropdown && (
              <ul className="submenu">
                {menu_item.sub_menus.map((sub_menu, i) => (
                  <li key={i}>
                    <Link href={sub_menu.link}>{sub_menu.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
