import React from 'react';
import { Component } from 'react';
import DesktopBreakpoint from './responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from './responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from './responsive_utilities/phone_breakpoint';

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>My Breakpoints!</h2>
        
        <DesktopBreakpoint>
          <h3>DesktopBreakpoint!</h3>
        </DesktopBreakpoint>

        <TabletBreakpoint>
          <h3>TabletBreakpoint!</h3>
        </TabletBreakpoint>

        <PhoneBreakpoint>
          <h3>PhoneBreakpoint</h3>
        </PhoneBreakpoint>
      </div>
    );
  }
}
