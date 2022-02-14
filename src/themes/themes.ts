export const themes = {
  light: {
    color: {
      text: '#282230',
      background: {
        _: '#f1f1f1',
        contrast: '#b1b1b1',
      },
      primary: '#01796f',
      primary_dark: '#016159',
      secondary: '#562931',
    },
  },
  dark: {
    color: {
      text: '#f1f1f1',
      background: {
        _: '#27323a',
        contrast: '#0d1215',
      },
      primary: '#01978b',
      primary_dark: '#00887c',
      secondary: '#fe8690',
      secondary_dark: '#fe8690',
    },
    surface: {
      _: 'red',
      text: 'white'
    },
    paper: {
      _: 'red',
      text: 'white'
    }
  },
} as const;
