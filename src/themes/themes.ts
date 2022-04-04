export const themes = {
  light: {
    color        : {
      text          : '#282230',
      background    : {
        _       : '#f1f1f1',
        paper   : '#ededed',
        contrast: '#b1b1b1',
      },
      primary       : 'rgba(208, 191, 151, 0.5)',
      primary_dark  : '#016159',
      secondary     : '#562931',
      secondary_dark: '#562931',
    },
    border_color : 'rgba(157, 157, 157, 0.3)',
    overlay_color: 'rgba(255,255,255, 0.5)',
  },
  dark : {
    color        : {
      text          : '#f1f1f1',
      background    : {
        _       : '#27323a',
        paper   : '#3a3b3b',
        contrast: '#0d1215',
      },
      primary       : 'rgba(208, 191, 151, 0.5)',
      primary_dark  : '#00887c',
      secondary     : '#562931',
      secondary_dark: '#562931',
    },
    border_color : 'rgba(255, 255, 255, 0.1)',
    overlay_color: 'rgba(157, 157, 157, 0.1)',
  },
} as const;
