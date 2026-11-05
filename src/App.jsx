import React from 'react';
import { 
  MessageSquare, 
  Folder, 
  GitBranch, 
  Users, 
  ArrowUpRight, 
  Sparkles, 
  Code2, 
  Terminal, 
  Layers 
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      
      <div className="mb-4 text-gray-800 font-bold text-base flex items-center gap-2 tracking-tight">
        <Sparkles className="w-5 h-5 text-gray-600" />
        <span>tinyspace.</span>
      </div>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
        
        <div className="bg-gray-900 p-8 text-white flex justify-between items-center">
          <span className="bg-gray-800 px-3 py-1.5 rounded text-xs font-semibold text-gray-300 flex items-center gap-2 tracking-wide">
            <Terminal className="w-4 h-4" />
          </span>
        </div>

        <div className="flex justify-center -mt-12">
          <div className="w-24 h-24 rounded-full bg-white p-1 border border-gray-200">
            <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center text-gray-700 font-bold text-xl tracking-widest">
              HB
            </div>
          </div>
        </div>

        <div className="p-8 text-center">
          
          <div className="inline-flex items-center gap-2 bg-gray-50 text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium mb-4 border border-gray-200/60">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            Open to opportunities
          </div>

          <h1 className="text-xl font-bold text-gray-900 tracking-tight">
            Haroun Bouidarene
          </h1>
          <p className="text-sm text-gray-500 mb-5 font-medium">@haroun_dev</p>

          <p className="text-sm text-gray-600 leading-relaxed mb-8 font-normal">
            Full-Stack developer focused on building robust web and mobile applications with modern technologies.
          </p>

          <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-100 mb-8 text-center">
            <div className="flex flex-col items-center">
              <Folder className="w-5 h-5 text-gray-400 mb-1.5" />
              <p className="text-base font-bold text-gray-900">12</p>
              <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase">Projects</p>
            </div>
            <div className="flex flex-col items-center border-x border-gray-100">
              <GitBranch className="w-5 h-5 text-gray-400 mb-1.5" />
              <p className="text-base font-bold text-gray-900">24</p>
              <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase">Repos</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-5 h-5 text-gray-400 mb-1.5" />
              <p className="text-base font-bold text-gray-900">5+</p>
              <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase">Clients</p>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-xs font-semibold text-gray-700 mb-3 flex items-center justify-center gap-1.5">
              <Code2 className="w-4 h-4 text-gray-500" />
              Core Stack
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-gray-50 border border-gray-200 text-gray-700 px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-gray-500" />
                React
              </span>
              <span className="bg-gray-50 border border-gray-200 text-gray-700 px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-gray-500" />
                Node.js
              </span>
              <span className="bg-gray-50 border border-gray-200 text-gray-700 px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-gray-500" />
                Tailwind
              </span>
            </div>
          </div>

          <a 
            href="https://wa.me/213794870612?text=Hello%20Haroun,%20I%20saw%20your%20profile%20and%20want%20to%20connect!" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-5 rounded-lg text-sm transition duration-150"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Get in touch (WhatsApp)</span>
            <ArrowUpRight className="w-4 h-4 opacity-70" />
          </a>

        </div>

      </div>

      <div className="mt-5 text-center">
        <p className="text-xs text-gray-500 font-medium">
          Built with React and Tailwind CSS
        </p>
      </div>

    </div>
  );
}