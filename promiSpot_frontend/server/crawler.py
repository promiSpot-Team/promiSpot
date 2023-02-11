from selenium import webdriver
from bs4 import BeautifulSoup
from selenium.webdriver.common.by import By
import json
import sys

def getDetail(url):
  options = webdriver.ChromeOptions()
  options.add_argument("headless")
  options.add_experimental_option('excludeSwitches', ['enable-logging'])

  driver = webdriver.Chrome(options=options)
  driver.get(url)
  driver.implicitly_wait(10)
  place_name = driver.find_element(By.XPATH, '//*[@id="mArticle"]/div[1]/div[1]/div[2]/div/h2').text
  place_star = driver.find_element(By.XPATH, '//*[@id="mArticle"]/div[1]/div[1]/div[2]/div/div/a[1]/span[1]').text
  place_img = driver.find_element(By.XPATH, '//*[@id="mArticle"]/div[1]/div[1]/div[1]/a/span[1]').value_of_css_property('background-image')[5:-2]
  
  place_info = {
    "placeName": place_name,
    "placeStar": place_star,
    "placeImg": place_img
  }

  print(json.dumps(place_info))

if __name__ == '__main__':
  getDetail(sys.argv[1])