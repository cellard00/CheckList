
function onEdit(e) {
  if(e != undefined) {
    if(e.value === 'complete' && e.oldValue === "incomplete"){
          var r = e.range
          var col = r.getColumn()
          var row = r.getRow()
          var sheet = SpreadsheetApp.getActiveSheet();
          var s = "A" + row +":A" +row 
          end = CountRows(row,col)
          var rowSpec = sheet.getRange(s);
          sheet.moveRows(rowSpec, end+1);
          var sNew = "A" + end +":A" + end 

          var newSpec = sheet.getRange(sNew)
          sheet.hideRow(newSpec)
    } 
  }
};

function CountRows(row, col){
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var count = row-1
  for(var i = row-1 ; i < data.length; i++){
  Logger.log(data[i][0])
    if (data[i][col-1] == ''){
      return(i);
    }
  }
  
  return(count);
}
