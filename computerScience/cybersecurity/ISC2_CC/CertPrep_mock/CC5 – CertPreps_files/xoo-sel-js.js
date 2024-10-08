window.xooElRecaptchaCallback = function(){
	window.xooElNotExecuted = 1;
}

jQuery(document).ready(function($){

	if( xoo_sel_localize.grForms.length && xoo_sel_localize.grVersion === 'v2' ){
		//Load recaptcha
		window.xooElRecaptchaCallback = function(){
			$('.xoo-el-recaptcha').each( function (index, $el ){
				grecaptcha.render(
					$el,{
						'sitekey' : xoo_sel_localize.grSiteKey
					}
				)
			})
		}

		if( window.xooElNotExecuted ){
			window.xooElRecaptchaCallback();
		}
	}

	var captchaVerified = false;

	$('.xoo-el-form-container').on( 'submit', '.xoo-el-action-form', function(e){

		if( xoo_sel_localize.grVersion !== 'v3' || captchaVerified || !xoo_sel_localize.grForms.length || !xoo_sel_localize.grForms.includes( $(this).find('input[name="_xoo_el_form"]').val() ) ){
			return;
		}

		var $form = $(this);

		e.preventDefault();
		e.stopImmediatePropagation();

		$form.find('button[type="submit"]').addClass('xoo-el-processing');

        grecaptcha.ready( function(){
			grecaptcha.execute( xoo_sel_localize.grSiteKey, {action: 'xoo_sel_recaptcha_submit'} ).then( function(token) {
				captchaVerified = true;
			 	$form.prepend('<input type="hidden" name="g-recaptcha-response" value="' + token + '">');
                $form.submit();
			} );
        });

	} );
})