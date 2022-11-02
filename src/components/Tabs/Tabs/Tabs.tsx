import React, { useState } from "react";
import style from "./styles.module.scss";
import useTheme from "../../../hooks/useTheme";

const Tabs = ({ children }: { children: JSX.Element[] }) => {
  const { theme } = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className={style.tabsContainer}>
      <div className={style.tabsLabels}>
        {children.map((child, i) => (
          <div
            key={i}
            className={style.tabLabel}
            style={{
              borderBottom:
                selectedTab === i
                  ? `3px solid ${theme.colors.primary}`
                  : "none",
            }}
            onClick={() => setSelectedTab(i)}
          >
            {child.props.title}
          </div>
        ))}
      </div>

      {children
        .filter((_, i) => i === selectedTab)
        .map((child, i) => (
          <React.Fragment key={i}>{child}</React.Fragment>
        ))}
    </div>
  );
};

export default Tabs;
