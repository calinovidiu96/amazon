<template>
    <main>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <div class="a-section">
                        <div class="a-spacing-top-medium"></div>
                        <h2 style="text-align: center">Add new product </h2>
                        <!-- Category Dropdown -->
                        <form action="">
                            <div class="a-spacing-top-medium">
                                <label for="">Category</label>
                                <select class="a-select-option">
                                    <option value="1">1</option>
                                    <option value="1">2</option>
                                    <option value="1">3</option>
                                </select>
                            </div>
                        </form>
                        <!-- Owner Dropdown -->
                         <form action="">
                            <div class="a-spacing-top-medium">
                                <label for="">Owner</label>
                                <select class="a-select-option">
                                    <option value="1">1</option>
                                    <option value="1">2</option>
                                    <option value="1">3</option>
                                </select>
                            </div>
                            <div class="a-spacing-top-medium">
                            <label for="">Title</label>
                            <input type="text" class="a-input-text" style="width:100%;" name="" id="">
                        </div>

                        <div class="a-spacing-top-medium">
                            <label for="">Price</label>
                            <input type="number" class="a-input-text" style="width:100%;" name="" id="">
                        </div>

                        <div class="a-spacing-top-medium">
                            <label for="">Description</label>
                            <textarea placeholder="Provide details." style="width:100%;" name="" id="" cols="30" rows="4"></textarea>
                        </div>

                        <div class="a-spacing-top-medium">
                            <label for="">Add Photo</label>
                            <div class="a-row a-spacing-top-medium">
                                <label for="" class="choosefile-button">
                                    <i class="fal fa-plus"></i>
                                    <input type="file" name="" id="">
                                    <p style="margin-top: -70px">photo name</p>
                                </label>
                            </div>
                        </div>
                        <hr />
                        <div class="a-spacing-top-large">
                            <span class="a-button-register">
                                <span class="a-button-inner">
                                    <span class="a-button-text">Add product</span>
                                </span>
                            </span>
                        </div>
                        </form>
                    </div>
                </div>
                <div class="col-sm-3"></div>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    
}
</script>