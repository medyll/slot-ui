import type {PathsType, TreeItemType} from './types';

export const trans2Tree = (paths: PathsType, pathKey: string): TreeItemType[] => {
 
  const tree: TreeItemType[] = [];
 
  for (let i = 0; i < paths.length; i++) {
    
    const path       = paths[i].path;
    const pathSplice = path.split('/');
    
    let currentLevel = tree;
    
    for (let j = 0; j < pathSplice.length; j++) {
      const part = pathSplice[j];
      
      const existingPath = currentLevel.find(k => k.name === part); //findWhere(currentLevel, 'name', part);
      
      if (existingPath) {
        currentLevel = existingPath.children;
      } else {
        const newPart = {
          name    : part,
          path    : '',
          data    : {},
          children: [],
        };
        
        currentLevel.push(newPart);
        currentLevel = newPart.children;
      }
    }
  }
  return tree;
};