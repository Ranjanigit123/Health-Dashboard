import React from 'react';
import { navigationLinks } from '../data/navigationLinks';
import * as Icons from 'lucide-react';

type IconName = keyof typeof Icons;

const Sidebar: React.FC = () => {
  return (
    <aside className="h-full py-8 px-4 flex flex-col">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">
          <span className="text-cyan-500">Health</span>
          <span className="text-gray-800">care.</span>
        </h1>
      </div>

      <div className="flex flex-col flex-1">
        <div className="mb-6">
          <h2 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
            General
          </h2>
          <nav>
            <ul className="space-y-2">
              {navigationLinks
                .filter(link => link.category === 'general')
                .map(link => {
                  const IconComponent = Icons[link.icon as IconName];
                  return (
                    <li key={link.id}>
                      <a
                        href="#"
                        className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                          link.active
                            ? 'text-blue-600 bg-white'
                            : 'text-gray-600 hover:bg-white'
                        }`}
                      >
                        <IconComponent className={`w-5 h-5 mr-3 ${link.active ? 'text-blue-600' : 'text-gray-500'}`} />
                        {link.name}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </nav>
        </div>

        <div>
          <h2 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
            Tools
          </h2>
          <nav>
            <ul className="space-y-2">
              {navigationLinks
                .filter(link => link.category === 'tools')
                .map(link => {
                  const IconComponent = Icons[link.icon as IconName];
                  return (
                    <li key={link.id}>
                      <a
                        href="#"
                        className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                          link.active
                            ? 'text-blue-600 bg-white'
                            : 'text-gray-600 hover:bg-white'
                        }`}
                      >
                        <IconComponent className={`w-5 h-5 mr-3 ${link.active ? 'text-blue-600' : 'text-gray-500'}`} />
                        {link.name}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;