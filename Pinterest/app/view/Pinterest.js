/*
 * File: app/view/Pinterest.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Pinterest.view.Pinterest', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.XTemplate'
    ],

    itemId: 'pinterest',
    padding: '',
    layout: {
        type: 'card'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    itemId: 'loginView',
                    layout: {
                        align: 'center',
                        type: 'vbox'
                    },
                    items: [
                        {
                            xtype: 'container',
                            flex: 1,
                            margins: '40 0 0 0 ',
                            itemId: 'title',
                            items: [
                                {
                                    xtype: 'image',
                                    height: 78,
                                    itemId: 'pinterestImg',
                                    width: 215,
                                    src: 'resources/pinterest-logo.jpg'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            html: '<h1>Save all the stuff you love (recipes! articles! travel ideas!) right here on Pinterest. </h1>',
                            itemId: 'subtitle'
                        },
                        {
                            xtype: 'container',
                            flex: 2,
                            itemId: 'loginDiv',
                            items: [
                                {
                                    xtype: 'label',
                                    itemId: 'loginLabel',
                                    style: {
                                        color: '#525252',
                                        fontSize: '23px'
                                    },
                                    text: 'Log in to Pinterest'
                                },
                                {
                                    xtype: 'textfield',
                                    itemId: 'email',
                                    margin: '20 0 0 0',
                                    emptyText: 'Email'
                                },
                                {
                                    xtype: 'textfield',
                                    itemId: 'password',
                                    margin: '20 0 0 0',
                                    inputType: 'password',
                                    emptyText: 'Password'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'loginBtn',
                                    margin: '20 0 0 75',
                                    padding: '5 10 5 10',
                                    text: 'Login'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    itemId: 'contentView',
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    items: [
                        {
                            xtype: 'container',
                            itemId: 'toolBar',
                            layout: {
                                align: 'middle',
                                pack: 'center',
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    margins: '0 20 0 50',
                                    itemId: 'topics',
                                    style: {
                                        borderRadius: '3px'
                                    },
                                    width: 30,
                                    text: '- - '
                                },
                                {
                                    xtype: 'textfield',
                                    itemId: 'searchBox',
                                    style: {
                                        borderRadius: '5px'
                                    },
                                    width: 174,
                                    emptyText: 'What are you into?'
                                },
                                {
                                    xtype: 'image',
                                    margins: '0 200 0 200',
                                    height: 41,
                                    itemId: 'titleImg',
                                    width: 102,
                                    defaultAlign: 'center',
                                    src: 'resources/pinterest-logo.jpg'
                                },
                                {
                                    xtype: 'button',
                                    margins: '0 20 0 0',
                                    itemId: 'addBtn',
                                    text: '+'
                                },
                                {
                                    xtype: 'image',
                                    border: 100,
                                    height: 21,
                                    itemId: 'profileImg',
                                    width: 20,
                                    src: 'resources/profile.jpg'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'profileBtn',
                                    text: 'Diana'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'pinBtn',
                                    text: '*'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            bind: function(record, store) {
                                store.loadData(record.getAssociatedData().pins || []);
                                this.child('#pinsView').bindStore(store);

                            },
                            flex: 1,
                            itemId: 'pins',
                            layout: {
                                type: 'fit'
                            },
                            items: [
                                {
                                    xtype: 'dataview',
                                    cls: 'pin-list',
                                    itemId: 'pinsView',
                                    tpl: [
                                        '<style>',
                                        '   ',
                                        '    .pinCls{',
                                        '        margin:40px 10px;',
                                        '        display: inline-block;',
                                        '        border: 1px solid gray;',
                                        '        padding:10px;',
                                        '        vertical-align:top;',
                                        '    }',
                                        '     .firstCol{',
                                        '        margin-left:25%;',
                                        '    }',
                                        '</style>',
                                        '<tpl for=".">',
                                        '    <div class="pinCls {[xindex % 4 === 1 ? "firstCol" : ""]}">',
                                        '        <img src="data/{img}"/>',
                                        '        <div class="title">{title}</div>',
                                        '        <div class="autor">',
                                        '            <img src="data/{parent.img}" height="40px" width="40px"/>',
                                        '            <div class="name">{parent.username}</div>',
                                        '        </div>',
                                        '    </div>',
                                        '</tpl>'
                                    ],
                                    autoScroll: true,
                                    itemSelector: '.pin',
                                    store: 'Pins',
                                    trackOver: true
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});