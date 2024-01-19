function simplifyPath(path: string): string {
  // create an empty path stack
  // clean input data, remove any repeated /
  // split the input on /
  // interate over the input
  //  add the path to the stack or remove
  //  . = skip
  //  .. = remove from stack
  // '' = skip

  const stack = [];
  const directories = path.split('/');

  for (let dir of directories) {
    if (dir === '.' || dir === '') {
      continue;  
    }
    if (dir === '..') {
      stack.pop();
      continue
    }
    stack.push(dir);
  }

  return '/' + stack.join('/')
};