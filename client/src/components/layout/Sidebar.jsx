import React from "react";
import { Users, FileText, Settings, LogOut } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const Sidebar = ({ isSidebarOpen, toggleMenuBar }) => {
  const { theme } = useTheme();

  const navigationItems = [
    { icon: Users, label: "Patients", href: "#" },
    { icon: FileText, label: "Authorizations", href: "#" },
    { icon: Settings, label: "Settings", href: "#" },
    { icon: LogOut, label: "Logout", href: "#" },
  ];

  const sidebarClasses = `
    fixed inset-y-0 left-0 transform 
    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
    lg:translate-x-0 transition-transform duration-300 ease-in-out 
    ${theme === "dark" ? "bg-gray-800" : "bg-white"} 
    w-64 z-20 pt-16
    ${
      theme === "dark" ? "border-r border-gray-700" : "border-r border-gray-200"
    }
  `;
  
  return (
    <aside className={sidebarClasses}>
      <div className="px-4 py-6">
        <nav className="space-y-1">
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                className={`
                  flex items-center px-4 py-3 rounded-lg
                  ${
                    theme === "dark"
                      ? "text-gray-300 hover:bg-gray-700"
                      : "text-gray-600 hover:bg-gray-100"
                  }
                `}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;


