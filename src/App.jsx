import React from 'react';
// import { Default } from './stories/WithControl.stories';
import { BootstrapThemePlugin } from './BootstrapThemePlugin'





function App() {

  const themePlugin = new BootstrapThemePlugin('lux');
  const { ThemeSelector } = themePlugin.useThemeComponent();

  return (
    <div className="App">
      <p> Any Message</p>
      <ThemeSelector/>
    </div>
  );
}

export default App;
