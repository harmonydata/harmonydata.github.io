---
title: "Harmony Discovery"
description: "Harmony Discovery"
date: "2024-09-05"
# image: /images/header/FDS_servicespharma_header_2.svg
---

## Harmony discovery



{{< htmlcode >}}

<script src="https://code.jquery.com/jquery-1.9.1.js"></script>
<script src="https://d3js.org/d3.v6.min.js"></script>
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

<form id="formoid" method="GET" action="https://harmonydiscoveryfunctionapp.azurewebsites.net/api/UserInput">
<label for="text">Write your search term</label><br/>
<select onchange="setExample(this);">
<option value=1>Example 1</option>
<option value=2>Example 2</option>
<option value=3>Example 3</option>
</select>
<br/>
<textarea id="text" name="text" cols="80" rows="1">anxiety</textarea><br/>

Source: <select id="source">
<option value="" selected></option>
<option value="adruk">adruk</option>
<option value="closer">closer</option>
<option value="hdruk">hdruk</option>
<option value="mhc">mhc</option>
<option value="ukds">ukds</option>
<option value="ukllc">ukllc</option>
</select><br/>
Sex: <select id="sex">
<option value=male>Male</option>
<option value=female>Female</option>
<option value=all selected>All</option>
</select><br/>
Age lower: <input type="numeric" id="age_lower" value=0 /><br/>
Age upper: <input type="numeric" id="age_upper" value=999 /><br/>
Sample size lower: <input type="numeric" id="sample_size_lower" value=0 /><br/>
Sample size upper: <input type="numeric" id="sample_size_upper" value=999 /><br/>


<br/>


<input type="submit" value="Find studies" style="border-width:1px;background-color:rgb(87 204 153);color:white;padding:2px;margin:2px;border-radius:4px;">

<div id="result">[enter a text and click Find studies and the study data will be shown here]</div>

</form>

<script type="text/javascript">
 /* attach a submit handler to the form */
 $("#formoid").submit(function(event) {
     /* stop form from submitting normally */
     event.preventDefault();

     /* get the action attribute from the <form action=""> element */
     var $form = $(this),
         url = $form.attr('action');
         
 
          $('#result').text('⌛ Searching for study data.');


     /* Send the data using post with element id name and name2*/
     var posting = $.get(url, {
         texts: JSON.stringify( [ $('#text').val() ] ),
         source: $('#source').val(),
         sex: $('#sex').val(),
         age_lower: $('#age_lower').val(),
         age_upper: $('#age_upper').val(),
         sample_size_lower: $('#sample_size_lower').val(),
         sample_size_upper: $('#sample_size_upper').val(),
         crossDomain: true
     });

     /* Alerts the results */
     posting.done(function(data) {
         // log it
         console.dir(data);
         console.log(data);
         
         $('#result').html("<pre>" +          JSON.stringify(JSON.parse(data), null, 2) + "</pre>");

     });
     posting.fail(function() {
         $('#result').text('failed');
     });
     
   
     
 });
</script>


<script>
 function setExample(option){
if (option.value == 1) { 
{
document.getElementById("text").value=`anxiety`;
}
}

if (option.value == 2) { 
{
document.getElementById("text").value=`GAD-7`;
}
}

if (option.value == 3) { 
{
document.getElementById("text").value=`adolescent`;
}
}
}
</script>
{{< /htmlcode >}}




