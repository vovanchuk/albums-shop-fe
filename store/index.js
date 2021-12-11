export const state = () => ({
  allTemplates: {
    'wedding': [
      { id: 1, url: 'wedding-template.jpg', title: 'Minimalistyczny'},
      { id: 2, url: 'wedding-pastel.jpg', title: 'Pastelowy'},
      { id: 3, url: 'wedding-bw.jpg', title: 'Czarno-biały'},
      { id: 4, url: 'wedding-vintage.jpg', title: 'Vintage'},
      { id: 5, url: 'wedding-rustic.jpg', title: 'Rustykalny'},
      { id: 6, url: 'wedding-modern.jpg', title: 'Nowoczesny'},
    ],
    'occasion': [
      { id: 1, url: 'ocasion-template.jpg', title: 'Okazjonalne'},
      { id: 2, url: 'wedding-pastel.jpg', title: ''},
      { id: 3, url: 'wedding-bw.jpg', title: ''},
      { id: 4, url: 'wedding-vintage.jpg', title: ''},
      { id: 5, url: 'wedding-rustic.jpg', title: ''},
      { id: 6, url: 'wedding-modern.jpg', title: ''},
    ],
    'trip': [
      { id: 1, url: 'trip-template.jpg', title: 'Podróżnicze'},
      { id: 2, url: 'wedding-pastel.jpg', title: ''},
      { id: 3, url: 'wedding-bw.jpg', title: ''},
      { id: 4, url: 'wedding-vintage.jpg', title: ''},
      { id: 5, url: 'wedding-rustic.jpg', title: ''},
      { id: 6, url: 'wedding-modern.jpg', title: ''},
    ],
    'kids': [
      { id: 1, url: 'kids-template.jpg', title: 'Dziecięce'},
      { id: 2, url: 'wedding-pastel.jpg', title: ''},
      { id: 3, url: 'wedding-bw.jpg', title: ''},
      { id: 4, url: 'wedding-vintage.jpg', title: ''},
      { id: 5, url: 'wedding-rustic.jpg', title: ''},
      { id: 6, url: 'wedding-modern.jpg', title: ''},
    ],
    'birthday': [
      { id: 1, url: 'birthday-template.jpg', title: 'Urodzinowe'},
      { id: 2, url: 'wedding-pastel.jpg', title: ''},
      { id: 3, url: 'wedding-bw.jpg', title: ''},
      { id: 4, url: 'wedding-vintage.jpg', title: ''},
      { id: 5, url: 'wedding-rustic.jpg', title: ''},
      { id: 6, url: 'wedding-modern.jpg', title: ''},
    ],
    'person': [
      { id: 1, url: 'person-template.jpg', title: 'Dla specjalnej osoby'},
      { id: 2, url: 'wedding-pastel.jpg', title: ''},
      { id: 3, url: 'wedding-bw.jpg', title: ''},
      { id: 4, url: 'wedding-vintage.jpg', title: ''},
      { id: 5, url: 'wedding-rustic.jpg', title: ''},
      { id: 6, url: 'wedding-modern.jpg', title: ''},
    ]
  },
  images: [],
  pages: [
    {
      'elements': [],
      'backgroundImage': 'color',
      'backgroundColor': '#fff',
    },
    {
      'elements': [],
      'backgroundImage': 'color',
      'backgroundColor': '#fff',
    },
    {
      'elements': [],
      'backgroundImage': 'color',
      'backgroundColor': '#fff',
    },
  ],
  currentPage: 0,
})

import Vue from 'vue'

export const mutations = {
  ADD_IMAGE(state, imageObj) {
    state.images.push(imageObj)
  },
  ADD_ELEMENT(state, type){
    var page = state.pages[state.currentPage]['elements']
    if(type === 'image')
      page.push({ base64: '', file: null, orgImageId: null, zIndex: 1, width: 200, height: 200, top: 0, left: 0, type: 'image'})
    else
      page.push({ text: 'Dodaj tekst', zIndex: 1, width: 200, height: 200, top: 0, left: 0, type: 'text'})
  },
  ADD_IMAGE_TO_PAGE(state, imageObj) {
    var page = state.pages[state.currentPage]['elements']
    var obj = page[imageObj.itemId]
    obj.base64 = imageObj.base64
    obj.file = imageObj.file
    obj.orgImageId = imageObj.orgImageId
    obj.zIndex = imageObj.zIndex
  },
  DELETE_IMAGE_BY_INDEX(state, idx){
    state.images.splice(idx, 1)
  },
  UPDATE_IMAGE_BY_INDEX(state, {newObj, idx}) {
    state.images[idx] = newObj
  },
  UPDATE_IMAGE_FROM_PAGE_BY_INDEX(state, {newObj, idx}) {
    var page = state.pages[state.currentPage]['elements']
    var obj = page[idx]
    obj.base64 = newObj.base64
    obj.file = newObj.file
  },
  CHANGE_Z_TO_BOTTOM(state, id) {
    var page = state.pages[state.currentPage]['elements']
    var obj = page[id]
    if (obj.zIndex === 1){
      return
    }
    obj.zIndex = 1
    page.forEach((image) => {
      if(image !== obj && image.zIndex !== page.length){
        image.zIndex = image.zIndex + 1
      }
    })
  },
  CHANGE_Z_TO_TOP(state, id) {
    var page = state.pages[state.currentPage]['elements']
    var obj = page[id]
    if (obj.zIndex === page.length){
      return
    }
    obj.zIndex = page.length
    page.forEach((image) => {
      if(image !== obj && image.zIndex !== 1){
        image.zIndex = image.zIndex - 1
      }
    })
  },
  RESIZE_ELEMENT(state, {newSize, idx}){
    var page = state.pages[state.currentPage]['elements']
    var obj = page[idx]
    obj.width = newSize.width
    obj.height = newSize.height
    obj.top = newSize.top
    obj.left = newSize.left
  },
  CHANGE_CURRENT_PAGE(state, number){
    state.currentPage = number
  },
  ADD_PAGE(state){
    state.pages.splice(state.currentPage, 0 , {'elements': [], 'backgroundImage': 'color','backgroundColor': '#fff'})
  },
  REMOVE_PAGE(state, number){
    state.pages.splice(state.currentPage, 1)
    state.currentPage = number
  },
  UPDATE_BG_IMAGE(state, newBg){
    var page = state.pages[state.currentPage]
    page['backgroundImage'] = newBg
  },
  UPDATE_BG_COLOR(state, newBg){
    var page = state.pages[state.currentPage]
    page['backgroundImage'] = 'color'
    page['backgroundColor'] = newBg
  },
  DELETE_ELEMENT(state, id) {
    var page = state.pages[state.currentPage]['elements']
    page.splice(id, 1)
  },
  UPDATE_ELEMENT(state, {id, newEl}) {
    const elIdx = state.pages[state.currentPage]['elements'].findIndex(element => element.id === id)
    if(elIdx >= 0) {
      Vue.set(state.pages[state.currentPage]['elements'], elIdx, newEl)
      // state.pages[state.currentPage]['elements'][elIdx] = newEl
    }
  }
}

export const getters = {
  getTemplatesByCategory: (state) => (category) => {
    return state.allTemplates[category]
  },
  getTemplateById: (state) => (category, id) => {
    return state.allTemplates[category].find(template => template.id == id)
  },
  getPhotos: (state) => state.images,
  getPhotosFromPage: (state) => state.pages[state.currentPage]['elements'].filter(element => element.type === 'image'),
  getTextFieldsFromPage: (state) => state.pages[state.currentPage]['elements'].filter(element => element.type === 'text'),
  getElementFromCurrentPage: (state) => (id) => state.pages[state.currentPage]['elements'][id] ?? '',
  getPages: (state) => state.pages,
  getPageById: (state) => (id) => state.pages[id],
  getCurrentPage: (state) => state.currentPage,
  getPageBackgroundImage: (state) => state.pages[state.currentPage]['backgroundImage'],
  getPageBackgroundColor: (state) => state.pages[state.currentPage]['backgroundColor'],
}
