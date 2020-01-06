import Fs from 'fs'
import * from 'file-saverjs'

canvas.toBlob(function(blob) {
    saveAs(blob, filename);
  });