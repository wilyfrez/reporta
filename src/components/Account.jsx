import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { FiSettings } from 'react-icons/fi';

import { NavBar, Footer, SideBar, ThemeSettings } from './';

import { useStateContext } from '../contexts/ContextProvider';
import {
  Departments,
  Goals,
  GoalSpecific,
  ReportSpecific,
  NotFound,
  Overview,
  Reports,
  Staff,
} from '../pages';
import { PendingSubmissions } from './Tables';

const Account = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
          {/* <TooltipComponent content="Settings" position="Top"> */}
          <button
            type="button"
            onClick={() => setThemeSettings(true)}
            style={{ background: currentColor, borderRadius: '50%' }}
            className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <FiSettings />
          </button>
          {/* </TooltipComponent> */}
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
            <SideBar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <SideBar />
          </div>
        )}
        <div
          className={
            activeMenu
              ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
              : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
          }
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navBar w-full ">
            <NavBar />
          </div>
          <div>
            {themeSettings && <ThemeSettings />}

            <Routes>
              {/* dashboard  */}
              <Route path="/" element={<Overview />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/pending" element={<PendingSubmissions />} />

              {/* management  */}
              <Route path="/departments" element={<Departments />} />
              <Route path="/staff" element={<Staff />} />
              {/* <Route path="/templates" element={<Templates />} />
              <Route path="/categories" element={<Categories />} /> */}

              {/* submission */}
              <Route path="/goals" element={<Goals />} />
              <Route path="/goals/:goalId" element={<GoalSpecific />} />

              <Route path="/reports" element={<Reports />} />
              <Route path="/reports/:reportId" element={<ReportSpecific />} />

              <Route path="/*" element={<NotFound />} />

              {/*  <Route path="/appraisals" element={<Appraisals />} />
              <Route path="/citations" element={<Citations />} /> */}

              {/* apps  */}
              {/* <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} /> */}

              {/* charts  */}
              {/* <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} /> */}
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Account;
