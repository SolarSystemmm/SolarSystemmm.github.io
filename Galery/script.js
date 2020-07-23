const items = [
    {
        id: 'iph11',
        name: 'IPhone11',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWT1i20a5RnTdPePwDvY06s1HMxGGWU2IWLg&usqp=CAU',
        count: 0
    },
    {
        id: 'iph11mp',
        name: 'IPhone11MaxPro',
        img: 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/i/p/iphone_11_pro_sg_2_3.jpg',
          count: 0
    },
     {
        id: 'iph10',
        name: 'IPhone10',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSumCdeUHAc2-TuPRKya5a2Igtg8kDXKpPVvRCXHF_gd7Zb-Zc6Ra-4G3g0BmQ&usqp=CAc',
          count: 0
    },
]
new Shop(items, document.getElementsByClassName('container')[0])

// Cart will be added with auto
