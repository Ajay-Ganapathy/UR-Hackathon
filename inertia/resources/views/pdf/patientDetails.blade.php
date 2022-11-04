<!DOCTYPE html>
<html>
<head>
<style>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
</style>
</head>
<body>

<h1>Patient medical history at HackElite's Hospital
</h1>

<table id="customers">
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Doctor</th>
    <th>Illness</th>
    <th>Description</th>
    <th>Medicine</th>
   
  </tr>
  @if(count($patientVisit))
     @foreach($patientVisit as $patient)
        <tr>
            <td>{{$patient->id}}</td>
            <td>{{$patient->patient_id}}</td>
            <td>{{$patient->doctor_id}}</td>
            <td>{{$patient->disease}}</td>
            <td>{{$patient->disease_description}}</td>
            <td>{{$patient->medicine}}</td>
        </tr>
    @endforeach
  @else
  <tr>
    <td colspan='3'>No user found</td>
   
  </tr>
  @endif
</table>

</body>
</html>


