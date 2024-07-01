export const usePageLoaderState = () => useState("pageLoaderState", () => "load") // load / loading / loaded
export const useLocalTimeState = () => useState("localTime", () => "12:00")
export const useScrollDownState = () => useState("scrollDown", () => false)
export const useScrollPositionState = () => useState("scrollPosition", () => 0)