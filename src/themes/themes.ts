export const themes = {
  light: {
    color: {
      text: '#282230',
      background: {
        _: '#f1f1f1',
        paper: '#ededed',
        contrast: '#b1b1b1',
      },
      primary: '#01796f',
      primary_dark: '#016159',
      secondary: '#562931',
      secondary_dark: '#562931',
    },
  },
  dark: {
    color: {
      text: '#f1f1f1',
      background: {
        _: '#27323a',
        paper: '#3a3b3b',
        contrast: '#0d1215',
      },
      primary: '#01978b',
      primary_dark: '#00887c',
      secondary: '#562931',
      secondary_dark: '#562931',
    }
  },
} as const;
