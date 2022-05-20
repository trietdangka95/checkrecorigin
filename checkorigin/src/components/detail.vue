<template>
    <div class="container">
        <div class="headerDetail row">
            <div class="logoDetail col">
                <img src="../assets/images/logo.png" class="logo-detail" alt="">
            </div>
            <div class="inputDetail col">
                <input type="text" class="input-rec-detail" placeholder="Check another serial number" >
                <span class="btn-search-detail" ></span>
            </div>
        </div>
        <div class="mainDetail row">
            <div class="row">
                <div class="header-detail row">
                    <div class="info-rec col-3">
                        <p>Project Name</p>
                        <b>T-RECSolarINSSRE1</b>
                    </div>
                    <span class="line"></span>
                    <div class="info-rec col-2">
                        <p>Asset ID</p>
                        <b>GEN1234</b>
                        
                    </div>
                    <span class="line"></span>
                    <div class="info-rec col-2">
                        <p>Asset Type</p>
                        <b>Solar Energy REC</b>
                        <span class="line"></span>
                    </div>
                    <span class="line"></span>
                    <div class="info-rec col-4">
                        <p>Loacation (2.292938, 102.342703)</p>
                        <b>Rajasthan, India</b>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <div class="leftDetail">
                        <img src="../assets/images/Geothermal-big.png" class="row img1" alt="">
                        <img src="../assets/images/Biomass-Big.png" class="row img2" alt="">
                    </div>
                </div>
                <div class="col-4">
                    <div class="centerDetail row">
                        <div class="row detail-rec">
                            <p>REC Serial Number</p>
                            <b>TIGR-1177-MY-04-10-2020-3048-145</b>
                        </div>
                        <div class="row detail-rec">
                            <p>Project Online Date</p>
                            <b>Feb 11, 2013</b>
                        </div>
                        <div class="row detail-rec"><p>Date of REC Generation</p>
                            <b>Oct-2020</b></div>
                        <div class="row detail-rec"><p>Nameplate Capacity</p>
                            <b>20 MW</b></div>
                        <div class="row detail-rec"><p>Estimated Annual Generation</p>
                            <b>9835 MWh</b></div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="rightDetail">
                        <div class="description row">
                            <b>Asset Description:</b>
                            <p>GKSB Solar PV Farm is located in Melaka, Malaysia. It consists of Yingli Solar, Hanwha Q Cells and JA Solars panels. The solar farm is using EDMI Mk6E for metering. EDMI MK6E is a high-precision meter created for generation and transmission applications, as well as for revenue metering at high-end consumer facilities. The power plant is connected to grid.</p>
                        </div>
                        <div class="certification row">
                            <img src="../assets/images/tigrs.png" class="img-certification" alt="">
                            <p>RECs Certification   </p>
                            <p>
The trusted RECs are registered at The Tradable Instrument for Global Renewables (TIGR), a global renewable energy registry developed and managed by APX.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script setup>

</script>

<style scoped >
p{
    margin-top: 10px
}
.mainDetail{
    background-color: #F9F9F9;  
}
.inputDetail{
    display:flex;
    position: relative;
    flex-direction: row-reverse;
}
.header-detail p{
    margin-bottom: 10px;
}
.input-rec-detail{
    position: absolute;
    height: 40px;
    width: 320px;
    margin: 50px 65px 25px 0px;
    border-radius: 50px;
    background: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.7;
    border: 1px solid #E8E8E8;
    border-radius: 50px;
    font-size: 18px;
    padding-left: 15px;
}
.logo-detail{
    height: 60px;
    width: 250px;
    margin: 25px 0px 25px 65px;
    border-radius: 0px;

}

.btn-search-detail{
    position: absolute;
    width: 50px;
    height: 30px;
    top: 55px;
    right: 70px;
    background-repeat: no-repeat;
    border:0px;
    background-position: center;
    margin-right: 10px;
    background-image: url('../assets/images/Shape.png');
}
.line{
    height:100px;
    width: 1px;
    background-image: url('../assets/images/Line.png');
    background-repeat: no-repeat;
    background-position: center;
}
.btn-search-detail:hover{
    background-size: 20px;
    cursor: pointer;
}
.header-detail{
    width: 80%;
    height: 100px;
    margin: 25px 0px 10px 65px;
    background: #FFFFFF;
    border: 1px solid #E8E8E8;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
}

.detail-rec{
    width: 100%;
    height: 80px;
    background: #FFFFFF;
    border: 1px solid #E8E8E8;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    margin-bottom: 20px;
    margin-left:50px;
}


.img1{
    width: 100%;
    height: 300px;
    background: #FFFFFF;
    border: 1px solid #E8E8E8;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    margin-left: 50px;
    margin-bottom: 10px;
}

.img2{
    width: 100%;
    height: 300px;
    background: #FFFFFF;
    border: 1px solid #E8E8E8;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    margin-left: 50px;
}

.description{
    height: 300px;
    margin-bottom: 10px;
    background: #FFFFFF;
    border: 1px solid #E8E8E8;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    margin-left: 50px;
}
.certification{
    margin-bottom: 10px;
    height: 300px;
    background: #FFFFFF;
    border: 1px solid #E8E8E8;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    margin-left: 50px;
}

.img-certification{
    width: 80%;
    height: 40%;
    object-fit: contain;
}
</style>
