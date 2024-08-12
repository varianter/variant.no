import { useEffect, useRef, useState } from "react";

const useTabs = () => {
  const tabListRef = useRef<HTMLUListElement | null>(null);
  const [tabFocus, setTabFocus] = useState(0);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  useEffect(() => {
    const tabList = tabListRef.current;
    if (!tabList) return;

    const tabs = tabList.querySelectorAll<HTMLButtonElement>('[role="tab"]');

    const handleKeyDown = (e: KeyboardEvent) => {
      let newFocus = tabFocus;

      if (e.key === "ArrowRight") {
        newFocus = (tabFocus + 1) % tabs.length;
      } else if (e.key === "ArrowLeft") {
        newFocus = (tabFocus - 1 + tabs.length) % tabs.length;
      }

      if (newFocus !== tabFocus) {
        setTabFocus(newFocus);
        tabs[newFocus].focus();
      }

      if (e.key === " " || e.key === "Enter") {
        changeTabs(newFocus);
      }
    };

    const changeTabs = (newIndex: number) => {
      const targetTab = tabs[newIndex];
      const tabGroup = tabList.parentElement!;

      setSelectedTabIndex(newIndex);
      setTabFocus(newIndex);

      // Remove all current selected tabs
      tabs.forEach((tab) => tab.setAttribute("aria-selected", "false"));

      // Set this tab as selected
      targetTab.setAttribute("aria-selected", "true");

      // Hide all tab panels
      tabGroup
        .querySelectorAll('[role="tabpanel"]')
        .forEach((panel) => panel.setAttribute("aria-hidden", "true"));

      // Show the selected panel
      const controlledPanel = tabGroup.querySelector(
        `#${targetTab.getAttribute("aria-controls")}`
      );
      controlledPanel?.removeAttribute("aria-hidden");
    };

    tabs.forEach((tab, index) => {
      tab.setAttribute("tabindex", index === selectedTabIndex ? "0" : "-1");
      tab.addEventListener("click", () => changeTabs(index));
    });

    tabList.addEventListener("keydown", handleKeyDown);

    return () => {
      tabs.forEach((tab) => {
        tab.removeEventListener("click", () => changeTabs(tabFocus));
      });
      tabList.removeEventListener("keydown", handleKeyDown);
    };
  }, [tabFocus, selectedTabIndex]);

  return { tabListRef, selectedTabIndex };
};

export default useTabs;
