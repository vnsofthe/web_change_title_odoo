var changed_odoo_title="";
openerp.web_change_title_odoo = function(instance){
    instance.web.WebClient.include({
            init: function(parent, client_options) {
                var self = this;
                this._super(parent,client_options);
                if(changed_odoo_title==""){
                    var P = new instance.web.Model('ir.config_parameter');
                    P.call('get_param', ['company.title']).then(function(t) {
                        self.set('title_part', {"zopenerp": t});
                    }).fail(function(result, ev){
                        console.log(result);
                    });
                }else{
                    self.set('title_part', {"zopenerp": changed_odoo_title});
                }
            }
        }
    );
}