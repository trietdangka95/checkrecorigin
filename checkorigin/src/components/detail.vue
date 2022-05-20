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
                <div class="header-detail">
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
.input-rec-detail{
    position: absolute;
    height: 50px;
    width: 320px;
    margin: 25px 65px 25px 0px;
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
    height: 80px;
    width: 250px;
    margin: 25px 0px 25px 65px;
    border-radius: 0px;

}

.btn-search-detail{
    position: absolute;
    width: 50px;
    height: 30px;
    top: 35px;
    right: 70px;
    background-repeat: no-repeat;
    border:0px;
    background-position: center;
    margin-right: 10px;
    background-image: url('../assets/images/Shape.png');
}
.btn-search-detail:hover{
    background-size: 20px;
    cursor: pointer;
}
.header-detail{
    width: 57%;
    height: 124px;
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

.rightDetail{
    height: 600px;
    background: #FFFFFF;
    border: 1px solid #E8E8E8;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
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
</style>
