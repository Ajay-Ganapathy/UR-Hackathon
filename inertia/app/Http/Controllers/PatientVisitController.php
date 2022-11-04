<?php

namespace App\Http\Controllers;

use App\Models\patientVisit;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use PDF;
use Illuminate\Support\Facades\Crypt;
class PatientVisitController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $user = DB::table('users')->where('id', 2)->first();
        $patientVisit = DB::table('patient_visits')->where('patient_id', auth()->user()->id)->get();
        $patientVisit['name'] = $user->name;
        $patientVisit['docName'] = DB::table('users')->where('id', $patientVisit->doctor_id)->first()->name;
        $pdf = PDF::loadView('pdf.patientDetails', ['patientVisit'=>$patientVisit])->output();


        $encrypted = Crypt::encryptString($pdf);

        $cid = Http::withOptions(['verify' => false])->withBody($encrypted, 'application/pdf')
            ->withToken(env('WEB3_TOKEN'))
            ->post('https://api.web3.storage/upload')->json('cid');

        dd($cid);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\patientVisit  $patientVisit
     * @return \Illuminate\Http\Response
     */
    public function show(patientVisit $patientVisit)
    {   
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\patientVisit  $patientVisit
     * @return \Illuminate\Http\Response
     */
    public function edit(patientVisit $patientVisit)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\patientVisit  $patientVisit
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, patientVisit $patientVisit)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\patientVisit  $patientVisit
     * @return \Illuminate\Http\Response
     */
    public function destroy(patientVisit $patientVisit)
    {
        //
    }

    public function store_patient_details()
    {
        $user = DB::table('users')->where('id', 2)->first();
        $patientVisit = DB::table('patient_visits')->where('patient_id', 2)->get();
        // $patientVisit['name'] = $user->name;
        // $patientVisit['docName'] = DB::table('users')->where('id', 4)->first()->name;
        $pdf = PDF::loadView('pdf.patientDetails', ['patientVisit'=>$patientVisit])->output();


        $encrypted = Crypt::encryptString($pdf);

        $cid = Http::withOptions(['verify' => false])->withBody($encrypted, 'application/pdf')
            ->withToken(env('WEB3_TOKEN'))
            ->post('https://api.web3.storage/upload')->json('cid');

        dd($cid);
        return $cid;
        //Store the cid in DB
//        return $pdf->download('patientDetails.pdf');

    }

    public function download_patient_details()
    {
//        $user = DB::table('users')->where('id', 2)->first();
//        $patientVisit = DB::table('patient_visits')->where('patient_id', auth()->user()->id)->get();
//        $patientVisit['name'] = $user->name;
//        $patientVisit['docName'] = DB::table('users')->where('id', $patientVisit->doctor_id)->first()->name;
//        $pdf = PDF::loadView('pdf.patientDetails', ['patientVisit'=>$patientVisit])->output();
//
//
//        $encrypted = Crypt::encryptString($pdf);
      // $patientVisit = DB::table('patient_visits')->where('patient_id', auth()->user()->id)->get();
        $cid = "bafkreiez32lqblpkjnx5vqo3sjpynp7qgxceriayeau5fysc7di6vqqi7q"; //GET THE CID STORED IN THE DB

        $url = "https://$cid.ipfs.w3s.link/";

        $content = Http::withOptions(['verify' => false])->get($url)->body();

        $decrypted = Crypt::decryptString($content);

        return response($decrypted, 200, [
            'Content-Type' => 'application/pdf'
        ]);
        //Store the cid in DB
//        return $pdf->download('patientDetails.pdf');

    }
}
