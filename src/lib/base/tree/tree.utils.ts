import { forEach } from 'lodash';
import type { PathsType, TreeItemType } from './types';

export const trans2Tree = (paths: PathsType, pathKey: string): TreeItemType[] => {

  const tree: TreeItemType[] = [];

  // sort path alphabetically
  const sortedPaths = paths.sort((a, b) => (a.path > b.path) ?  1 : -1)

  for (let i = 0; i < sortedPaths.length; i++) {

    const path = sortedPaths[i].path;
    const data = sortedPaths[i]?.data;
    const pathSplice = path.split('/');

    let currentLevel = tree;

    for (let j = 0; j < pathSplice.length; j++) {
      const part = pathSplice[j];

      const existingPath = currentLevel.find(k => k.name === part); //findWhere(currentLevel, 'name', part);

      if (existingPath) {
        currentLevel = existingPath.children;
      } else {
        // ensure precedent exist !
        const prectest = pathSplice
        let precCollPath = '';

        const newPart = {
          name: part ,
          path: pathSplice.slice(0,j+1).join('/'), // nope
          data: {},
          children: [],
        };
        // 
        currentLevel.push(newPart);
        currentLevel = newPart.children;
        // console.log({ currentLevel })
         
      }
    }
  }
  return tree;
};
