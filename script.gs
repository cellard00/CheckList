function onEdit(e) {
  if(e != undefined) {
    if(e.value === 'complete'){
          var r = e.range
          var col = r.getColumn()
          var row = r.getRow()
          var sheet = SpreadsheetApp.getActiveSheet();
          var s = "A" + row +":A" +row 
          end = CountRows(row,col)
          var rowSpec = sheet.getRange(s);
          sheet.moveRows(rowSpec, end+1);
          
          //Get range of last row
          var sNew = "A" + end +":A" + end 

          var newSpec = sheet.getRange(sNew)
          sheet.hideRow(newSpec)
    } 
  }
};

function CountRows(row, col){
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  
  //Return the first empty cell
  return(data.length);
}
